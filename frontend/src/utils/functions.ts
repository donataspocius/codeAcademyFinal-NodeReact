import { AUTH_TOKEN_STORAGE_KEY } from "../constants";

interface BodyProps {
  email?: string;
  password?: string;
  username?: string;
  userProfile?: string;
}

export const getToken = async (apiAddress: string, body: BodyProps) => {
  try {
    const fetchData = await fetch(apiAddress, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...body }),
    });
    const result = await fetchData.json();
    return result;
  } catch (error) {
    console.log("error fetching API data -->", error);
  }
};

export const getApiDataWithToken = async (apiAddress: string) => {
  try {
    const authToken = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
    const fetchData = await fetch(apiAddress, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${authToken}`,
      },
    });
    const result = await fetchData.json();
    return result;
  } catch (error) {
    console.log("error fetching token API data -->", error);
  }
};

export const getApiData = async (apiAddress: string) => {
  try {
    const fetchData = await fetch(apiAddress, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await fetchData.json();
    return result;
  } catch (error) {
    console.log("error fetching token API data -->", error);
  }
};
