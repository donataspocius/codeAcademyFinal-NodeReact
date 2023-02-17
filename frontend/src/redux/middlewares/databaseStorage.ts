import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { ADD_TO_VISITED_CITIES } from "../content/contentTypes";
import { RootState } from "../store";

const databaseStorage =
  ({ getState }: MiddlewareAPI) =>
  (next: Dispatch) =>
  (action: Action) => {
    next(action);

    let currentState = getState();

    switch (action.type) {
      case ADD_TO_VISITED_CITIES:
        // select visitedCities in current state
        const visitedCities = (state: RootState) => {
          return state.content.visitedCities;
        };
        const currVisitedCities = visitedCities(currentState);

        break;
      default:
        break;
    }
  };

export default databaseStorage;
