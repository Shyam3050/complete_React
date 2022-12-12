import { useState, useContext } from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Success from "./Component/UI/Success";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [successShown, setSuccessShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const orderHandler = () => {
    setSuccessShown(true);
    setTimeout(() => {
      setSuccessShown(false);
    }, 1500);
    setCartIsShown(false)
  };
  return (
    <CartProvider>
      {successShown && <Success />}
      {cartIsShown && <Cart onClose={hideCartHandler} onOrder={orderHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
