import { API_LOGIN_PASSWORD, API_LOGIN_USERNAME } from "./envConfig";

export let API_SECRET = btoa(`${API_LOGIN_USERNAME}:${API_LOGIN_PASSWORD}`);
export const API_URL = {
  getData: (idOrName: string) =>
    `https://api.roadgoat.com/api/v2/destinations/${idOrName}`,
};
