import { FETCHPRODUCTS } from "../actions/products";

const initialState = {
  allProducts: null,
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHPRODUCTS:
      return {
        allProducts: action.products,
      };
    default:
      return state;
  }
}

export default productsReducer;
