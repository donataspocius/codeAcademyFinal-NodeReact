import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { MONGODB_URI } from "./envConfig"; // importing string URI set for TS
import jwt from "jsonwebtoken";

import { createUser } from "./controllers/auth.controller";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json()); // use JSON
app.use(cors());

// Endpoints
app.get("/", (req: Request, res: Response): void => {
  res.send("HELLO from SERVER on PORT 5000");
});

// create new user in database (MongoDB: users)
app.post("/api/users/signup", createUser);

// Connection to MongoDB cities-api-db, creating server
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => console.log("Server running on port: " + PORT));
  })
  .catch((e) => console.log(e));
