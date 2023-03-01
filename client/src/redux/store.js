import { configureStore } from "@reduxjs/toolkit";
import Products from "./features/products/productsSlice";
import User from "./features/users/usersSlice";
import Tiendas from "./features/tiendas/tiendasSlice";
import Ubicaciones from "./features/ubicaciones/ubicacionesSlice";
import Stats from "./features/stats/statsSlice";

export const store = configureStore({
  reducer: {
    Products,
    User,
    Tiendas,
    Ubicaciones,
    Stats,
  },
});
