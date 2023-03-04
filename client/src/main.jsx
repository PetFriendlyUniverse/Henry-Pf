import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { store } from "./redux/store";
import { Provider } from "react-redux";

import axios from "axios";

const { VITE_BASE_URL } = import.meta.env;
axios.defaults.baseURL =
  VITE_BASE_URL || "https://petfriendly-backend.onrender.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
