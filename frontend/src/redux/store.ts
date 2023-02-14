import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import contentReducer from "./content/contentSlice";
import middlewares from "./middlewares/middlewares";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    content: contentReducer,
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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
