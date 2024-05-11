import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      // data.length = data.length ? data-action.data : [];
      const remainingItem = data.filter((item) => item.id !== action.data);
      // console.log(remainingItem);
      return [...remainingItem];

    case EMPTY_CART:
      data = [];
      return [...data];

    default:
      return data;
  }
};
