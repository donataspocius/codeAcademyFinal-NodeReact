import { Request, Response } from "express";

export const getUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const hello = "jello";
    res.status(200).json({ message: "success", hello });
  } catch (error) {
    console.log("getUserData error -->", error);
  }
};
