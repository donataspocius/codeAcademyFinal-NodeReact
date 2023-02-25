import { API_LOGIN_PASSWORD, API_LOGIN_USERNAME } from "./envConfig";
import { Buffer } from "buffer";

// export let API_SECRET = btoa(`${API_LOGIN_USERNAME}:${API_LOGIN_PASSWORD}`);
export let API_SECRET = Buffer.from(
  `${API_LOGIN_USERNAME}:${API_LOGIN_PASSWORD}`
).toString("base64");
export const API_URL = {
  getData: (idOrName: string) =>
    `https://api.roadgoat.com/api/v2/destinations/${idOrName}`,
};
