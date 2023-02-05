import { configureStore } from "@reduxjs/toolkit";
import middlewares from "./middlewares/middlewares";
// import content from "./content";
import auth from "./auth";

const store = configureStore({
  reducer: {
    // [content.constants.MODULE_NAME]: content.contentReducer,
    // [auth.constants.MODULE_NAME]: auth.authReducer,
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

export default store;
