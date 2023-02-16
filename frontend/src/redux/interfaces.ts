export interface AuthState {
  auth: {
    authToken: string;
  };
}
export interface ContentState {
  cities: CityData[];
  loading: boolean;
  error: boolean;
}

// export interface CityData {
//   id: string;
//   name: string;
//   photoUrl: string;
// }

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
