import axios from "axios";
export const FETCHPRODUCTS = "FETCHPRODUCTS";

const API_URL = "http://127.0.0.1:8000/api";
export const fetchProducts = (values) => {
  return async (dispatch) => {
    await axios
      .get(API_URL + "/products")
      .then((response) => {
        dispatch({ type: FETCHPRODUCTS, products: response.data });
      })
      .catch((err) => console.log(err));
  };
};
