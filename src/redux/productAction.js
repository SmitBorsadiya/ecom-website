import { PRODUCT_LIST, SEARCH_PRODUCT } from "./constant";

export const productList = () => {
  // It gives error as it can not handle Promise or async operations
  // let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // data = await data.json();

  return {
    type: PRODUCT_LIST,
  };
};

export const serachProduct = (query) => {
  return {
    type: SEARCH_PRODUCT,
    query,
  };
};
