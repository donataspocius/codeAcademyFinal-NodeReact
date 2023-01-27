import express, { Application, Request, Response } from "express";
import User from "../models/user.model";

// create new user function
export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  // getting user data
  const newUserData = req.body;
  try {
    // checking if user by that email already exists
    const userExist = await User.findOne({ email: newUserData.email });

    if (!userExist) {
      const newUser = new User(newUserData);
      const createdNewUser = await newUser.save();

      res.status(201).json({
        status: "success",
        message: "User created!",
        user: createdNewUser,
      });
    } else {
      res.status(400).json({
        status: "fail",
        message: "User with given email already exists",
      });
    }
  } catch (error) {
    res
      .status(500)
      .send({ status: "fail", message: `Error creating user: ${error}` });
  }
};
