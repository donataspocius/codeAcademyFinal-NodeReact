import { Request, Response } from "express";

export const getUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("getUserData controller runs");
  try {
    const hello = "jello";
    res.status(200).json({ message: "success", hello });
  } catch (error) {
    console.log("getUserData error -->", error);
  }
};
