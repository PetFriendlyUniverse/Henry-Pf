import { createSlice } from "@reduxjs/toolkit";

// para usar products => const products = useSelector(state => state.Products.products)
// para usar page => const page = useSelector(state => state.Products.page)
const initialState = {
  products: [],
  page: 1,
};

export const Products = createSlice({
  name: "Products", // dentro de esta propiedad en el store van a estar el resto de props
  initialState, // del initial state de este slice  ej: golbalState : { Products : { products : [] } }
  reducers: {
    // uso =>  const products = useSelector(state => state.Products.products)
    getProducts: (state, { payload }) => {
      state.products = payload[0];
      state.page = payload[1];
    },
  },
});

// Action creators are generated for each case reducer function
export const { getProducts } = Products.actions;

export default Products.reducer;
