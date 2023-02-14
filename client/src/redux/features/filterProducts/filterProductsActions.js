import { getProducts } from "../filterProducts/filterProductsSlice"
import axios from "axios"

export const getProductsAsync = () => async (dispatch)=>{
  const {data} = await axios.get("/rutaDeProducts")
  console.log("data en slice");
  return dispatch(getProducts(data.results))
}