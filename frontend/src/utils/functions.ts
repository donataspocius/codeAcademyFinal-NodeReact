export const getToken = async (apiAddress: string, body: object) => {
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
