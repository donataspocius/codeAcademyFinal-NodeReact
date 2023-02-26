// const API_DOMAIN = "http://localhost:7000";
const API_DOMAIN = "https://donatas-travel-app-api.onrender.com";

export const API = {
  signup: `${API_DOMAIN}/auth/signup`,
  login: `${API_DOMAIN}/auth/login`,
  updateUser: (userId: string) => `${API_DOMAIN}/user/${userId}`,
  countryCities: (countryName: string) => `${API_DOMAIN}/cities/${countryName}`,
  userVisitedCities: (userId: string) =>
    `${API_DOMAIN}/user/visitedCities/${userId}`,
  userWishCities: (userId: string) => `${API_DOMAIN}/user/wishCities/${userId}`,
  userContent: `${API_DOMAIN}/user/content`,
};

export const AUTH_TOKEN_STORAGE_KEY = "authToken";
export const USER_ID_STORAGE_KEY = "userId";
