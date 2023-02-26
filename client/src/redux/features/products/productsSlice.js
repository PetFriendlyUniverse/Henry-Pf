import { createSlice } from "@reduxjs/toolkit";

// const state = {
//   Products: {
//     initialState, // => {products: [], totalPages:1, currentPage:1}
//   },
//   OtroNombreDeSlice: {
//     suInitialState, // ...
//   },
// };

// para usar products => const products = useSelector(state => state.Products.products)
// para usar page => const page = useSelector(state => state.Products.page)
const initialState = {
  products: [],
  totalPages: 1,
  currentPage: 1,
  productsPerPage: 15,
  allFilters: [],
  setFilters: {}, // {size: "small", weight: 5, ...}
  priceRange: {}, // { min: numb, max: numb }
  productId: [],
  allbrands: [],
  favorite: [],
  shopCart: JSON.parse(localStorage.getItem("shopCart")) || {}, // { id: { product } } || { 1: { product 1 }, 2: { product 2 } }
};
// cantidad de productos dependiendo del width de la pantalla ???
export const Products = createSlice({
  name: "Products", // dentro de esta propiedad en el store van a estar el resto de props
  initialState, // del initial state de este slice  ej: golbalState : { Products : { products : [] } }
  reducers: {
    // uso =>  const products = useSelector(state => state.Products.products)
    getProducts: (state, { payload }) => {
      //payload: {paginated: [[{},{},{},{}...], totalPages], priceRange { min: numb, max: numb }}
      state.products = payload.paginated[0];
      state.totalPages = payload.paginated[1];
      state.priceRange = payload.priceRange;
    },
    getFilters: (state, { payload }) => {
      state.allFilters = payload;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    setFilters: (state, { payload }) => {
      const newSetFilters = { ...state.setFilters };
      const { filter, value } = payload; //{filter:"Breed", value: "breed1"}
      if (value === "") {
        delete newSetFilters[filter];
      } else {
        if (Array.isArray(payload)) {
          payload.forEach((f) => (newSetFilters[f.filter] = f.value));
        } else {
          newSetFilters[filter] = value;
        }
      }
      state.setFilters = newSetFilters;
      state.currentPage = 1;
    },
    clearFilters: (state) => {
      state.setFilters = {};
      state.currentPage = 1;
    },
    getProductsById: (state, { payload }) => {
      state.productId = payload;
    },
    clearProductId: (state) => {
      state.productId = {};
    },
    deletedProducts: (state, { payload }) => {
      state.products = payload;
    },
    getAllBrands: (state, { payload }) => {
      state.brands = payload;
    },
    setShopCart: (state, { payload }) => {
      // payload = { id: id, data:{ product } | "delete" } si recibimos product se agrega al carrito y sino se elimina
      const { data, id } = payload; // data = { id, img, ...todos los datos del producto entero }
      data == "delete"
        ? delete state.shopCart[id]
        : (state.shopCart[id] = { ...state.shopCart[id], ...data });
    },
    clearShopCart: (state) => {
      state.shopCart = {};
    },
    deleteFavorite: (state, { payload }) => {
      state.favorite = payload;
    },
  },
});

// los action creators se generan automáticamente
export const {
  getProducts,
  getFilters,
  setCurrentPage,
  setFilters,
  clearFilters,
  getProductsById,
  deletedProducts,
  setShopCart,
  clearShopCart,
  clearProductId,
  getAllBrands,
  deleteFavorite,
} = Products.actions;

export default Products.reducer;
