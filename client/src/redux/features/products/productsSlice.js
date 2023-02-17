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
  productsPerPage: 12,
  allFilters: [],
  setFilters: {}, // {size: "small", weight: 5}
  productId: [],
  shopCart: {}, // { id: { product } } || { 1: { product 1 }, 2: { product 2 } }
};
// cantidad de productos dependiendo del width de la pantalla ???
export const Products = createSlice({
  name: "Products", // dentro de esta propiedad en el store van a estar el resto de props
  initialState, // del initial state de este slice  ej: golbalState : { Products : { products : [] } }
  reducers: {
    // uso =>  const products = useSelector(state => state.Products.products)
    getProducts: (state, { payload }) => {
      state.products = payload[0]; //payload: [[{},{},{},{}...], totalPages]
      state.totalPages = payload[1];
    },
    getFilters: (state, { payload }) => {
      state.allFilters = payload;
    },
    setFilters: (state, { payload }) => {
      const newSetFilters = { ...state.setFilters };
      const { filter, value } = payload; //{filter:"Breed", value: "breed1"}
      if (value === "") {
        delete newSetFilters[filter];
      } else {
        newSetFilters[filter] = value;
      }
      state.setFilters = newSetFilters;
    },
    getProductsById: (state, { payload }) => {
      state.productId = payload;
    },
    deletedProducts: (state, { payload }) => {
      state.products = payload;
    setShopCart: (state, { payload }) => {
      // payload = { id: id, data:{ product } | "delete" } si recibimos product se agrega al carrito y sino se elimina
      const { data, id } = payload; // data = { id, img, ...todos los datos del producto entero }
      data == "delete"
        ? delete state.shopCart[id]
        : (state.shopCart[id] = data);
    },
  },
});

// los action creators se generan automáticamente
export const {
  getProducts,
  getFilters,
  setFilters,
  getProductsById,
  deletedProducts,
  setShopCart,
} = Products.actions;

export default Products.reducer;
