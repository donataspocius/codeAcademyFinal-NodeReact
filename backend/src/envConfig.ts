// this is fix for TS -> loading environement variables when running the server with typescript and node.js

import { config } from "dotenv";

config();

export const { API_LOGIN_USERNAME, API_LOGIN_PASSWORD } = process.env as {
  [key: string]: string;
};
