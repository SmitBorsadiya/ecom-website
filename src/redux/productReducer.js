import { PRODUCT_LIST } from "./constant";

export const productList = (data = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      console.warn("PRODUCT_LIST condition ", action);
      return [action.data];
    default:
      return data;
  }
};
