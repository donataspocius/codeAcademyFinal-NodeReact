import { Request, Response } from "express";
import User from "../models/user.model";

export const updateUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = req.params.userId;
  const newUserData = req.body;

  try {
    await User.findByIdAndUpdate(id, newUserData);
    const updatedUser = await User.findById(id);

    res.json({ status: "success", updatedUser });
  } catch (error) {
    console.log("getUserData error -->", error);
  }
};

export const getUserData = async (
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

    res.json({ status: "success", user });
  } catch (error) {
    console.log("getUserData error -->", error);
  }
};
