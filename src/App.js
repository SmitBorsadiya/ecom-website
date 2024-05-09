import './App.css';
import { addToCart } from './redux/action';
import {useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const data = {
    phone:"Oppo",
    price:15000,
    color:"blue"
  }
  return (
    <div className="App">
      <button onClick={()=>dispatch(addToCart(data))}>Add To Cart</button>
    </div>
  );
}

export default App;
