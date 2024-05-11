import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { emptyCart, removeFromCart } from "../redux/action";

const Cart = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  // console.log(result);
  return (
    <div>
      <h1>Cart Page</h1>
      {/* <div>
        {result.map((item) => (
          <div className="product-item" key={item.id}>
            <div>Name:{item.name}</div>
            <div>City:{item.city}</div>
            <div>State:{item.state}</div>
            <div>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove From Cart
              </button>
            </div>
          </div>
        ))}
      </div> */}
      <div className="cart-page-container">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>City</td>
              <td>State</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {result.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove From Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div>
        <Link to="/">Go to Home Page</Link>
      </div>
    </div>
  );
};

export default Cart;
