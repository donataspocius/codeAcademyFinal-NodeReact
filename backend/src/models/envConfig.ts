// this is fix for TS -> loading environement variables when running the server with typescript and node.js

import { config } from "dotenv";

config();

export const { PORT, MONGODB_URI } = process.env as {
  [key: string]: string;
};
