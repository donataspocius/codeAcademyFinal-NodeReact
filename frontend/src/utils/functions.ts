import { AUTH_TOKEN_STORAGE_KEY } from "../constants";

interface GetTokenProps {
  email?: string;
  password?: string;
  username?: string;
  userProfile?: string;
}

export const getToken = async (apiAddress: string, body: GetTokenProps) => {
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

interface UpdateDatabaseProps {
  visitedCities: string[];
}

export const updateDatabase = async (
  apiAddress: string,
  body: UpdateDatabaseProps
) => {
  try {
    const fetchData = await fetch(apiAddress, {
      method: "PUT",
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

// export const getApiDataWithToken = async (apiAddress: string) => {
//   try {
//     const authToken = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
//     const fetchData = await fetch(apiAddress, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${authToken}`,
//       },
//     });
//     const result = await fetchData.json();
//     return result;
//   } catch (error) {
//     console.log("error fetching token API data -->", error);
//   }
// };

// export const getApiData = async (apiAddress: string) => {
//   try {
//     const fetchData = await fetch(apiAddress, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const result = await fetchData.json();
//     return result;
//   } catch (error) {
//     console.log("error fetching token API data -->", error);
//   }
// };
