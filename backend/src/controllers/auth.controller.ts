import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model";
import { ACCESS_TOKEN_SECRET } from "./envConfig";

// create new user
export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  // getting user data
  const receivedUserData = req.body;
  try {
    // checking if user by that email already exists
    const userExist = await User.findOne({ email: receivedUserData.email });

    if (!userExist) {
      const hashedPassword = await bcrypt.hash(receivedUserData.password, 11);
      const preparedUserData = {
        ...receivedUserData,
        password: hashedPassword,
      };
      const newUser = new User(preparedUserData);

      const newUserSaved = await newUser.save();

      res.status(201).json({
        status: "success",
        message: "User created!",
        user: newUserSaved,
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
      .json({ status: "fail", message: `Error creating user: ${error}` });
  }
};

// login user
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  // CHECK IF USER EXISTS
  const user = await User.findOne({ email: req.body.email });

  // AUTHENTICATE USER
  if (user) {
    try {
      const passwordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (passwordCorrect) {
        const accessToken = jwt.sign(user.username, ACCESS_TOKEN_SECRET);
        res.status(200).json({ status: "success", accessToken });
      } else {
        res.status(400).json({ status: "fail", message: "wrong credentials" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ status: "fail", message: `Error signing in user: ${error}` });
    }
  } else {
    res.status(404).json({ status: "fail", message: "user not found!" });
  }
};
