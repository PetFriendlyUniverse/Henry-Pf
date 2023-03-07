import { configureStore } from "@reduxjs/toolkit";
import Products from "./features/products/productsSlice";
import User from "./features/users/usersSlice";
import Tiendas from "./features/tiendas/tiendasSlice";
import Ubicaciones from "./features/ubicaciones/ubicacionesSlice";
import Stats from "./features/stats/statsSlice";
import Filters from "./features/filters/filtersSlice";
import Services from "./features/services/servicesSlice";
import Adopciones from "./features/adopcion/adopcionSlice";

export const store = configureStore({
  reducer: {
    Services,
    Products,
    User,
    Tiendas,
    Ubicaciones,
    Stats,
    Filters,
    Adopciones,
  },
});
