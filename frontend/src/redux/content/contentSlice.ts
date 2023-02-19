import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CityData } from "../interfaces";
import { RootState } from "../store";

interface ContentState {
  cities: CityData[];
  visitedCities: CityData[];
  // ---> visitedCities: string[];
  visitedCitiesData: CityData[];
  wishCities: string[];
  wishCitiesData: CityData[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState: ContentState = {
  cities: [],
  visitedCities: [],
  visitedCitiesData: [],
  wishCities: [],
  wishCitiesData: [],
  status: "idle",
  error: undefined,
};

interface APIRequestType {
  apiAddress: string;
  type: "country" | "visitedCities" | "wishCities";
}

export const fetchCountryCities = createAsyncThunk(
  "content/getCountryCities",
  async ({ apiAddress, type }: APIRequestType) => {
    // async (apiAddress: string) => {
    // no more try/catch block needed
    const fetchData = await fetch(apiAddress, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (fetchData.status !== 200) {
      throw new Error("Please check your input - no such country found!");
    }
    const result = await fetchData.json();
    return { result, type };
  }
);

interface initializeStateAction {
  userLists: {
    visitedCities: CityData[];
    // ---> visitedCities: string[];
    wishCities: string[];
  };
}

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    initializeContentState: (
      state,
      // action: PayloadAction<[string[], string[]]>
      action: PayloadAction<initializeStateAction>
    ) => {
      state.visitedCities = action.payload.userLists.visitedCities;
      state.wishCities = action.payload.userLists.wishCities;
    },
    addToVisitedCities: (state, action: PayloadAction<CityData>) => {
      // ---> addToVisitedCities: (state, action: PayloadAction<string>) => {
      state.visitedCities.push(action.payload);
    },
    addToWishCities: (state, action: PayloadAction<string>) => {
      state.wishCities.push(action.payload);
    },
    resetUserState: (state) => {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCountryCities.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCountryCities.fulfilled, (state, action) => {
        state.status = "succeeded";

        if (action.payload.type === "country") {
          state.cities = action.payload.result;
        } else if (action.payload.type === "visitedCities") {
          state.visitedCitiesData = action.payload.result;
        } else if (action.payload.type === "wishCities") {
          state.wishCitiesData = action.payload.result;
        }
      })
      .addCase(fetchCountryCities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export selectors
export const selectAllCities = (state: RootState) => state.content.cities;
export const selectVisitedCities = (state: RootState) =>
  state.content.visitedCities;
export const selectVisitedCitiesData = (state: RootState) =>
  state.content.visitedCitiesData;
export const selectWishCities = (state: RootState) => state.content.wishCities;
export const selectWishCitiesData = (state: RootState) =>
  state.content.wishCitiesData;
export const selectContentStatus = (state: RootState) => state.content.status;
export const selectContentError = (state: RootState) => state.content.error;

// export actions
export const {
  addToVisitedCities,
  addToWishCities,
  resetUserState,
  initializeContentState,
} = contentSlice.actions;

// export reducer
export default contentSlice.reducer;
