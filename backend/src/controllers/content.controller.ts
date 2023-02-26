import { Request, Response } from "express";
import { getCitiesIdList, getCityData, getApiData } from "./helperFunctions";

export const getCitiesList = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const country = req.params.country;

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

// HELPER function to get country's data
export const getCountryData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const country = req.params.country;
    const apiData = await getApiData(country);
    console.log("received apiData from getCountryData", apiData);

    res.status(200).json({ message: "success", apiData });
  } catch (error) {
    res
      .status(500)
      .json({ status: "fail", message: `Error fetching API data: ${error}` });
  }
};
