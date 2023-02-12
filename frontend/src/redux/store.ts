import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import middlewares from "./middlewares/middlewares";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
      imutableCheck: false,
    }).concat(middlewares);
  },
  devTools: true,
});
