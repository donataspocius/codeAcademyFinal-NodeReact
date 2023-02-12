const API_DOMAIN = "http://localhost:5000";

export const API = {
  signup: `${API_DOMAIN}/auth/signup`,
  login: `${API_DOMAIN}/auth/login`,
};

export const AUTH_TOKEN_STORAGE_KEY = "authToken";
