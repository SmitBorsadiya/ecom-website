import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { productList } from "../redux/productAction";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productList);
  // console.log("Data in main component", data);
  // const product = {
  //   name: "i Phone",
  //   category: "mobile",
  //   price: 10000,
  //   color: "red",
  // };

  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <>
      <div className="product-container">
        {data?.map((item) => (
          <div className="product-item" key={item.id}>
            <div>Name:{item.name}</div>
            <div>City:{item.city}</div>
            <div>State:{item.state}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add To Cart
              </button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove From Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Main;
