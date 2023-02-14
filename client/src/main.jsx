import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./redux/store"
import { Provider } from "react-redux";
import axios from "axios"
axios.defaults.baseURL = 'https://api.example.com';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <App />
  </Provider>
);
