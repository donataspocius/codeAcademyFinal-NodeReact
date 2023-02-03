import { API_SECRET, API_URL } from "../constants";
import { Request, Response } from "express";

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

export const getCitiesList = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // const cityDataHere = await getCityData("10672983");
    // const cityDataHere = await getCityData("10672983"); // bad one
    // console.log("cityData here -->", cityDataHere);
    const country = req.params.country;
    // const cityData = [];
    const cityIdsList = await getCitiesIdList(country);
    const cityData = await Promise.all<any>(
      cityIdsList?.map(async (id) => {
        const cityDataHere = await getCityData(String(id));
        return cityDataHere;
      })
    );

    console.log(cityData);
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
    let response = await fetch(
      `https://api.roadgoat.com/api/v2/destinations/${countryName}`,
      {
        method: "GET",
        headers: {
          Authorization: "Basic " + API_SECRET,
        },
      }
    );
    let apiData = await response.json();
    // getting city ids array
    const topCities = apiData.data.attributes.top_cities_and_towns;
    const cityIds: number[] = topCities.map((city: { id: number }) => city.id);
    return cityIds;
  } catch (error) {
    console.log("error fetching API data: ", error);
  }
};

interface CityData {
  name: string;
  photoUrl: any;
}
const getCityData = async (id: string): Promise<CityData | undefined> => {
  try {
    let response = await fetch(
      `https://api.roadgoat.com/api/v2/destinations/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: "Basic " + API_SECRET,
        },
      }
    );
    let apiData = await response.json();
    // return apiData;
    const cityName = apiData.data.attributes.name;
    const photoId =
      apiData.included[0].relationships.featured_photo.data.id ||
      apiData.data.relationships.photos.data[0].id;
    // apiData.included[0].relationships.featured_photo.data.id;
    console.log("photoId -->", photoId);
    console.log("cityName -->", cityName);
    const photoDataArray = apiData.included;
    const photoObj = photoDataArray.filter(
      (obj: { id: string }) => obj.id === photoId
    );
    const photoUrl = photoObj[0].attributes.image.large;

    const cityData = { name: cityName, photoUrl: photoUrl };
    return cityData;
    // return apiData;
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
