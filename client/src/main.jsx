import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import axios from "axios";
// axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL = "https://petfriendly-backend.onrender.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
