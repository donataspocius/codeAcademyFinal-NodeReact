import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AUTH_TOKEN_STORAGE_KEY } from "../../constants";
import { RootState } from "../store";

interface State {
  authToken: string;
}

const initialState: State = {
  authToken: window.localStorage.getItem(AUTH_TOKEN_STORAGE_KEY) || "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuthToken: (state, action: PayloadAction<string>) => {
      state.authToken = action.payload;
    },
  },
});

// export selectors
export const selectAuthToken = (state: RootState) => state.auth.authToken;

// export actions
export const { updateAuthToken } = authSlice.actions;

// export reducer
export default authSlice.reducer;
