import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import {
  ADD_TO_VISITED_CITIES,
  ADD_TO_WISH_CITIES,
} from "../content/contentTypes";
import { RootState } from "../store";
import {
  updateUserVisitedCities,
  updateUserWishCities,
} from "../../utils/functions";
import { API } from "../../constants";

const databaseStorage =
  ({ getState }: MiddlewareAPI) =>
  (next: Dispatch) =>
  (action: Action) => {
    next(action);

    let currentState = getState();

    const userId = (state: RootState) => {
      return state.auth.userId;
    };
    const currUserId = userId(currentState);

    switch (action.type) {
      case ADD_TO_WISH_CITIES:
        // select wishCities in current state
        const wishCities = (state: RootState) => {
          return state.content.wishCities;
        };
        const currWishCities = wishCities(currentState);

        updateUserWishCities(API.updateUser(currUserId), currWishCities);
        break;
      case ADD_TO_VISITED_CITIES:
        // select visitedCities in current state
        const visitedCities = (state: RootState) => {
          return state.content.visitedCities;
        };
        const currVisitedCities = visitedCities(currentState);

        updateUserVisitedCities(API.updateUser(currUserId), currVisitedCities);
        break;

      default:
        break;
    }
  };

export default databaseStorage;
