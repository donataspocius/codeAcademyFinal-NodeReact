const API_DOMAIN = "http://localhost:5000";

export const API = {
  signup: `${API_DOMAIN}/auth/signup`,
  login: `${API_DOMAIN}/auth/login`,
  // userContent: (userId: string) => `${API_DOMAIN}/user/content/:${userId}`,
  userContent: `${API_DOMAIN}/user/content`,
};

export const AUTH_TOKEN_STORAGE_KEY = "authToken";
