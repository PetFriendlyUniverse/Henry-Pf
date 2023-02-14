import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    products: Products,
  },
});
