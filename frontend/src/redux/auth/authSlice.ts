import { createSlice, current } from "@reduxjs/toolkit";
import { AUTH_TOKEN_STORAGE_KEY } from "../../constants";
// import {UPDATE_AUTH_TOKEN} from "./authTypes";

interface State {
  authToken: string;
}

interface Action {
  type: string;
  payload: string;
}

const initialState = {
  authToken: window.localStorage.getItem(AUTH_TOKEN_STORAGE_KEY) || "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuthToken: (state: State, action: Action) => {
      state.authToken = action.payload;
    },
  },
});

export const { updateAuthToken } = authSlice.actions;
export default authSlice.reducer;
