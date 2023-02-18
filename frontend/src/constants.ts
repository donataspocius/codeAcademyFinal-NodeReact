const API_DOMAIN = "http://localhost:7000";

export const API = {
  signup: `${API_DOMAIN}/auth/signup`,
  login: `${API_DOMAIN}/auth/login`,
  updateUser: (userId: string) => `${API_DOMAIN}/user/${userId}`,
  countryCities: (countryName: string) => `${API_DOMAIN}/cities/${countryName}`,
  userContent: `${API_DOMAIN}/user/content`,
};

export const AUTH_TOKEN_STORAGE_KEY = "authToken";
export const USER_ID_STORAGE_KEY = "userId";
