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
  productsPerPage: 44, // antes 15
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
      const { data, id } = payload;
      // console.log("slice, id", id);
      // console.log("slice, data", data);  dropdown => id = 1    ...   data = {amount: 1}
      if (data == "delete") {
        const newAllProducts = state.products.map((prod) => {
          if (prod.id == id) {
            return {
              ...prod,
              stock: parseInt(prod.stock) + parseInt(state.shopCart[id].amount),
            };
          }
          return prod;
        });
        delete state.shopCart[id];
        state.products = newAllProducts;
      } else {
        if (data === "increment") {
          state.shopCart[id].amount += 1;
          state.products = state.products.map((prod) =>
            prod.id == id ? { ...prod, stock: prod.stock - 1 } : prod
          );
        } else {
          state.shopCart[id].amount -= 1;
          state.products = state.products.map((prod) =>
            prod.id == id ? { ...prod, stock: prod.stock + 1 } : prod
          );
        }
      }
    },
    addNewProdShopCard: (state, { payload }) => {
      const { id } = payload;
      state.shopCart[id] = !state.shopCart[id]
        ? payload
        : {
            ...state.shopCart[id],
            amount: state.shopCart[id].amount + payload.amount,
          };
      state.products = state.products.map((prod) =>
        prod.id == id ? { ...prod, stock: prod.stock - payload.amount } : prod
      );
    },
    clearShopCart: (state) => {
      const productIds = Object.keys(state.shopCart);
      state.products.forEach((prod) => {
        if (productIds.includes(prod.id.toString())) {
          prod.stock += state.shopCart[prod.id].amount;
        }
      });
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
  addNewProdShopCard,
  setShopCart,
  clearShopCart,
  clearProductId,
  getAllBrands,
  deleteFavorite,
} = Products.actions;

export default Products.reducer;
