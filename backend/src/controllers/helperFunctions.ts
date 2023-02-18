import { API_SECRET, API_URL } from "../constants";

export const getCitiesIdList = async (
  countryName: string
): Promise<number[] | undefined> => {
  try {
    console.log("getCitiesIdLIst runs");
    // fetching data
    let apiData = await getApiData(countryName);

    // getting city ids array
    const topCities = apiData.data.attributes.top_cities_and_towns;
    const cityIds: number[] = topCities.map((city: { id: number }) => city.id);
    return cityIds;
  } catch (error) {
    console.log("error fetching API data: ", error);
  }
};

export interface CityData {
  id: string;
  name: string;
  photoUrl: string;
  population: number;
  coordinates: {
    lat: number;
    long: number;
  };
  checkInCount: number;
  averageRating: number;
  airbnbUrl: string;
  carRentalUrl: string;
  cityGuideUrl: string;
}

export const getCityData = async (
  id: string
): Promise<CityData | undefined> => {
  try {
    // getting city detailed data
    let apiData = await getApiData(id);

    // getting city data
    const cityId = apiData.data.id;
    const cityName = apiData.data.attributes.name;
    const photoId =
      apiData.data?.relationships?.photos?.data?.[0]?.id ||
      apiData.included[0].relationships.featured_photo.data.id;

    const photoDataArray = apiData.included;
    const photoObj = photoDataArray.filter(
      (obj: { id: string }) => obj.id === photoId
    );
    const photoUrl = photoObj[0].attributes.image.large;

    const population = apiData.data.attributes.population;
    const coordinates = {
      lat: apiData.data.attributes.latitude,
      long: apiData.data.attributes.longitude,
    };
    const checkInCount = apiData.data.attributes.check_in_count;
    const averageRating = apiData.data.attributes.average_rating;
    const airbnbUrl = apiData.data.attributes.airbnb_url;
    const carRentalUrl = apiData.data.attributes.kayak_car_rental_url;
    const cityGuideUrl = apiData.data.attributes.getyourguide_url;

    const cityData: CityData = {
      name: cityName,
      photoUrl: photoUrl,
      id: cityId,
      population,
      coordinates,
      checkInCount,
      averageRating,
      airbnbUrl,
      carRentalUrl,
      cityGuideUrl,
    };
    return cityData;
  } catch (error) {
    console.log("error fetching API data (getCityData): ", error);
  }
};

export const getApiData = async (idOrName: string) => {
  try {
    let response = await fetch(API_URL.getData(idOrName), {
      method: "GET",
      headers: {
        Authorization: "Basic " + API_SECRET,
      },
    });
    let apiData = await response.json();
    return apiData;
  } catch (error) {
    console.log("error fetching API data (getApiData()): ", error);
  }
};
