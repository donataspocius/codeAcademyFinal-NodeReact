import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { MONGODB_URI } from "./models/envConfig"; // importing string URI set for TS
import { authenticateToken } from "./middlewares/auth.middlewares";
import { createUser, loginUser } from "./controllers/auth.controller";
import {
  getCountryData,
  getCitiesList,
} from "./controllers/content.controller";
import {
  // getUserData,
  getUserLists,
  updateUserData,
} from "./controllers/user.controller";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 7000;

// MIDDLEWARES
app.use(express.json()); // use JSON
app.use(cors());

// ENDPOINTS

// --- LOGIN ENDPOINTS
// create new user in database (MongoDB: users)
app.post("/auth/signup", createUser);

// login user
app.post("/auth/login", loginUser);

// --- USER ENPOINTS
// GET user data FOR DEVELOPMENT ONLY
app.get("/user/:userId", getUserLists);
// app.get("/user/:userId", authenticateToken, getUserData);

// UPDATE user visited/wish lists
app.put("/user/:userId", updateUserData);

// --- CONTENT ENDPOINTS
// GET all country cities data --> HOME page initial load
app.get("/cities/:country", getCitiesList);

// GET country data --> FOR DEVELOPING ONLY
app.get("/:country", getCountryData);

// CONNECTION TO MongoDB cities-api-db, CREATE SERVER
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => console.log("Server running on port: " + PORT));
  })
  .catch((e) => console.log(e));
