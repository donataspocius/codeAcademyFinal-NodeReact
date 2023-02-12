import ReactDOM from "react-dom/client";
import React, { StrictMode } from "react";
import "reset-css";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import App from "./app";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
