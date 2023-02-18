import { Request, Response } from "express";
import User from "../models/user.model";
import { getCityData } from "./helperFunctions";

export const getUserVisitedCities = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params.userId;
  try {
    const user = await User.findById(id);

    if (!user) {
      res
        .status(404)
        .json({ status: "fail", message: "User with given id not found" });
      return;
    }

    const userVisitedCitiesList = user?.visitedCities;

    const userVisitedCitiesData = await Promise.all<any>(
      userVisitedCitiesList?.map(async (id) => {
        const userCityData = await getCityData(String(id));
        return userCityData;
      })
    );

    res.status(200).json(userVisitedCitiesData);
  } catch (error) {
    console.log("getUserData error -->", error);
  }
};

export const getUserWishCities = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params.userId;
  try {
    const user = await User.findById(id);

    if (!user) {
      res
        .status(404)
        .json({ status: "fail", message: "User with given id not found" });
      return;
    }

    const userWishCitiesList = user?.wishCities;

    const userWishCitiesData = await Promise.all<any>(
      userWishCitiesList?.map(async (id) => {
        const userCityData = await getCityData(String(id));
        return userCityData;
      })
    );

    res.status(200).json(userWishCitiesData);
  } catch (error) {
    console.log("getUserData error -->", error);
  }
};

export const updateUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params.userId;
  const newUserData = req.body;

  try {
    const userData = await User.findById(id);
    console.log("BEFORE UPDATE", userData);
    await User.findByIdAndUpdate(id, newUserData);
    const updatedUser = await User.findById(id);
    console.log("AFTER UPDATE", updatedUser);

    res.json({
      status: "success",
      visitedCities: updatedUser?.visitedCities,
      wishCities: updatedUser?.wishCities,
    });
  } catch (error) {
    console.log("UPDATE USER error -->", error);
  }
};

export const getUserLists = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params.userId;
  try {
    const user = await User.findById(id);

    if (!user) {
      res
        .status(404)
        .json({ status: "fail", message: "User with given id not found" });
      return;
    }

    res.json({
      status: "success",
      userLists: {
        wishCities: user.wishCities,
        visitedCities: user.visitedCities,
      },
    });
  } catch (error) {
    console.log("getUserData error -->", error);
  }
};
