import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeFromCart = (data) => {
  return {
    type: REMOVE_FROM_CART,
    data: data,
  };
};

export const emptyCart = (data) => {
  return {
    type: EMPTY_CART,
    data: data,
  };
};
