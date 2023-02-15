import { configureStore } from "@reduxjs/toolkit";
import Products from "./features/products/productsSlice";

export const store = configureStore({
  reducer: {
    Products,
  },
});
