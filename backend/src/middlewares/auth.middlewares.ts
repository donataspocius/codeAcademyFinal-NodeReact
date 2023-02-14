import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../controllers/envConfig";

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token) {
    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) res.status(403);
      (req as any).user = user;
      next();
    });
  } else {
    res
      .status(401)
      .json({ status: "fail", message: "not authorized: no token provided" });
  }
}
