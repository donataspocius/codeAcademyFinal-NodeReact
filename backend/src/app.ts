import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { MONGODB_URI } from "./models/envConfig"; // importing string URI set for TS
import { authenticateToken } from "./middlewares/auth.middlewares";
import { createUser, loginUser } from "./controllers/auth.controller";
import { getCountryData } from "./controllers/content.controller";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// MIDDLEWARES
app.use(express.json()); // use JSON
app.use(cors());

// ENDPOINTS

// --- LOGIN ENDPOINTS
// create new user in database (MongoDB: users)
app.post("/auth/signup", createUser);

// login user
app.post("/auth/login", loginUser);

// --- CONTENT ENDPOINTS
// GET all cities --> HOME page initial load
app.get("/content/:country", getCountryData);

// CONNECTION TO MongoDB cities-api-db, CREATE SERVER
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => console.log("Server running on port: " + PORT));
  })
  .catch((e) => console.log(e));
