import { configureStore } from "@reduxjs/toolkit";
import Products from "./features/products/productsSlice";
//import User from "./features/users/usersSlice";

export const store = configureStore({
  reducer: {
    Products,
  },
});
