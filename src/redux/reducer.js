import { ADD_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("Reducer called");
      return "add to cart";

    default:
      return "no action";
  }
};
