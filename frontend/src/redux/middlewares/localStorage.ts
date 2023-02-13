import { AUTH_TOKEN_STORAGE_KEY } from "../../constants";
import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { UPDATE_AUTH_TOKEN } from "../auth/authTypes";

const localStorage =
  ({ getState }: MiddlewareAPI) =>
  (next: Dispatch) =>
  (action: Action) => {
    next(action);

    let currentState = getState();

    switch (action.type) {
      case UPDATE_AUTH_TOKEN:
        const authToken = (state: any) => {
          return state.auth.authToken;
        };
        const currAuthToken = authToken(currentState);
        window.localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, currAuthToken);
        console.log("localStorage middleware FE set!");
        break;
      default:
        break;
    }
  };

export default localStorage;
