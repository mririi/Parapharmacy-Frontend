import axios from "axios";
export const FETCHPRODUCTS = "FETCHPRODUCTS";
export const FETCHPRODUCTSBYCATEGORY = "FETCHPRODUCTSBYCATEGORY";
export const FETCHCURRENTPRODUCT = "FETCHCURRENTPRODUCT";
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
export const fetchProductsByCategory = (name) => {
  return async (dispatch) => {
    await axios
      .get(API_URL + "/productsbycategory/" + name, {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        dispatch({
          type: FETCHPRODUCTSBYCATEGORY,
          products: response.data.products,
        });
        console.log(response);
      })
      .catch((err) => console.log(err));
  };
};
export const fetchProductById = (id) => {
  return async (dispatch) => {
    await axios
      .get(API_URL + "/product/" + id, {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        dispatch({
          type: FETCHCURRENTPRODUCT,
          products: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
