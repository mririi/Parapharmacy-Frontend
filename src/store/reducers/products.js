import {
  FETCHPRODUCTS,
  FETCHPRODUCTSBYCATEGORY,
  FETCHCURRENTPRODUCT,
} from "../actions/products";

const initialState = {
  allProducts: null,
  productsByCategory: null,
  currentProduct: null,
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHPRODUCTS:
      return {
        allProducts: action.products,
      };
    case FETCHPRODUCTSBYCATEGORY:
      return {
        productsByCategory: action.products,
      };
    case FETCHCURRENTPRODUCT:
      return {
        currentProduct: action.products,
      };
    default:
      return state;
  }
}

export default productsReducer;
