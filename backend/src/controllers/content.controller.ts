import { API_SECRET } from "../constants";
import { Request, Response } from "express";

export const getCountryData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const country = req.params.country;
    let response = await fetch(
      `https://api.roadgoat.com/api/v2/destinations/${country}`,
      {
        method: "GET",
        headers: {
          Authorization: "Basic " + API_SECRET,
        },
      }
    );
    if (!response.ok) {
      res
        .status(400)
        .json({ status: "fail", message: "failed fetching API data" });
    }

    let apiData = await response.json();
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
    const cityDataHere = await getCityData(10755326);
    console.log("cityData here -->", cityDataHere);
    const country = req.params.country;
    // const cityIdsList = await getCitiesIdList(country);
    // cityIdsList?.forEach(async (id) => {
    //   const cityDataHere = await getCityData(id);
    //   return cityDataHere;
    // });
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
const getCityData = async (id: number): Promise<CityData | undefined> => {
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
    const cityName = apiData.data.attributes.name;
    const photoId = apiData.data.relationships.photos.data[0].id;
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
