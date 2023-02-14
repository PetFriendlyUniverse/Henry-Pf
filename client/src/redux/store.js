import { configureStore } from "@reduxjs/toolkit";
import Products from "./features/filterProducts/filterProductsSlice";

export const store = configureStore({
  reducer: {
    Products,
  },
});
