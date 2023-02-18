import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CityData } from "../interfaces";
import { RootState } from "../store";

interface ContentState {
  cities: CityData[];
  visitedCities: string[];
  wishCities: string[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState: ContentState = {
  cities: [],
  visitedCities: [],
  wishCities: [],
  status: "idle",
  error: undefined,
};

export const fetchCountryCities = createAsyncThunk(
  "content/getCountryCities",
  async (apiAddress: string) => {
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
    return result;
  }
);

interface initializeStateAction {
  visitedCities: string[];
  wishCities: string[];
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
      state.visitedCities = action.payload.visitedCities;
      state.wishCities = action.payload.wishCities;
    },
    addToVisitedCities: (state, action: PayloadAction<string>) => {
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
        state.cities = action.payload;
      })
      .addCase(fetchCountryCities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export selectors
export const selectAllCities = (state: RootState) => state.content.cities;
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
