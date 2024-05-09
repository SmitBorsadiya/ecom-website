import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { productList } from "../redux/productReducer";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productList);
  console.log(data);
  const product = {
    name: "i Phone",
    category: "mobile",
    price: 10000,
    color: "red",
  };
  return (
    <>
      <div>
        <button onClick={() => dispatch(addToCart(product))}>
          Add To Cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(removeFromCart(product.name))}>
          Remove From Cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart(product))}>Empty Cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(productList(product))}>
          Product List
        </button>
      </div>
    </>
  );
}

export default Main;
