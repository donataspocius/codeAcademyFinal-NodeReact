import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AUTH_TOKEN_STORAGE_KEY, USER_ID_STORAGE_KEY } from "../../constants";
import { RootState } from "../store";

interface State {
  authToken: string;
  userId: string;
}

const initialState: State = {
  authToken: window.localStorage.getItem(AUTH_TOKEN_STORAGE_KEY) || "",
  userId: window.localStorage.getItem(USER_ID_STORAGE_KEY) || "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuthToken: (state, action: PayloadAction<string>) => {
      state.authToken = action.payload;
    },
    updateUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
  },
});

// export selectors
export const selectAuthToken = (state: RootState) => state.auth.authToken;
export const selectUserId = (state: RootState) => state.auth.userId;

// export actions
export const { updateAuthToken, updateUserId } = authSlice.actions;

// export reducer
export default authSlice.reducer;
