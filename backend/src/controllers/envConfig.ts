// this is fix for TS -> loading environement variables when running the server with typescript and node.js

import { config } from "dotenv";

config();

export const { ACCESS_TOKEN_SECRET } = process.env as {
  [key: string]: string;
};
