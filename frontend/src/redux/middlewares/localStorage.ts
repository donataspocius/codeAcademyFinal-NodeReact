import { AUTH_TOKEN_STORAGE_KEY, USER_ID_STORAGE_KEY } from "../../constants";
import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { UPDATE_AUTH_TOKEN, UPDATE_USER_ID } from "../auth/authTypes";
import { RootState } from "../store";

const localStorage =
  ({ getState }: MiddlewareAPI) =>
  (next: Dispatch) =>
  (action: Action) => {
    next(action);

    let currentState = getState();

    switch (action.type) {
      case UPDATE_AUTH_TOKEN:
        const authToken = (state: RootState) => {
          return state.auth.authToken;
        };
        const currAuthToken = authToken(currentState);
        window.localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, currAuthToken);
        break;
      case UPDATE_USER_ID:
        const userId = (state: RootState) => {
          return state.auth.userId;
        };
        const currUserId = userId(currentState);
        window.localStorage.setItem(USER_ID_STORAGE_KEY, currUserId);
      default:
        break;
    }
  };

export default localStorage;
