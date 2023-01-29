import { API_SECRET } from "../constants";
import { Request, Response } from "express";

export const getAllCities = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let response = await fetch(
      `https://api.roadgoat.com/api/v2/destinations/united-states`,
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
