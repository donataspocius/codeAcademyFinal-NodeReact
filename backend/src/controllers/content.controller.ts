import { API_SECRET, API_URL } from "../constants";
import { Request, Response } from "express";

export const getCitiesList = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log("backend getCities list run");
    const country = req.params.country;
    console.log("country in params -->", country);

    const cityIdsList = await getCitiesIdList(country); // getting every city ID of the country

    // fetching data by city ID
    const cityData = await Promise.all<any>(
      cityIdsList?.map(async (id) => {
        const cityDataHere = await getCityData(String(id));
        return cityDataHere;
      })
    );
    res.status(200).json(cityData);
  } catch (error) {
    res
      .status(500)
      .json({ status: "fail", message: `Error fetching API data: ${error}` });
  }
};

const getCitiesIdList = async (
  countryName: string
): Promise<number[] | undefined> => {
  try {
    // fetching data
    let apiData = await getApiData(countryName);

    // getting city ids array
    const topCities = apiData.data.attributes.top_cities_and_towns;
    const cityIds: number[] = topCities.map((city: { id: number }) => city.id);
    return cityIds;
  } catch (error) {
    console.log("error fetching API data: ", error);
  }
};

export interface CityData {
  id: string;
  name: string;
  photoUrl: string;
}

const getCityData = async (id: string): Promise<CityData | undefined> => {
  try {
    // getting city detailed data
    let apiData = await getApiData(id);

    // getting city data
    const cityId = apiData.data.id;
    const cityName = apiData.data.attributes.name;
    const photoId =
      apiData.data?.relationships?.photos?.data?.[0]?.id ||
      apiData.included[0].relationships.featured_photo.data.id;

    const photoDataArray = apiData.included;
    const photoObj = photoDataArray.filter(
      (obj: { id: string }) => obj.id === photoId
    );
    const photoUrl = photoObj[0].attributes.image.large;

    const cityData: CityData = {
      name: cityName,
      photoUrl: photoUrl,
      id: cityId,
    };
    return cityData;
  } catch (error) {
    console.log("error fetching API data (getCityData): ", error);
  }
};

const getApiData = async (idOrName: string) => {
  try {
    let response = await fetch(API_URL.getData(idOrName), {
      method: "GET",
      headers: {
        Authorization: "Basic " + API_SECRET,
      },
    });
    let apiData = await response.json();
    return apiData;
  } catch (error) {
    console.log("error fetching API data (getApiData()): ", error);
  }
};

// HELPER function to get country's data
export const getCountryData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const country = req.params.country;
    const apiData = await getApiData(country);

    res.status(200).json({ message: "success", apiData });
  } catch (error) {
    res
      .status(500)
      .json({ status: "fail", message: `Error fetching API data: ${error}` });
  }
};
