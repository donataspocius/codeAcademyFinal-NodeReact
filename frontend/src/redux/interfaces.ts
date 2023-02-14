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

export interface CityData {
  id: string;
  name: string;
  photoUrl: string;
}
