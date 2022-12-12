import { useState } from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
import ContextProvider from "./store/ContextProvider";
function App() {
  const [cartIsShown, setCartisShown] = useState(false);
  function showCartHandler() {
    setCartisShown(true);
  }
  function hideCartHandling() {
    setCartisShown(false);
  }
  return (
    <ContextProvider>
      {cartIsShown && <Cart onClose= {hideCartHandling} />}
      <Header onShowCart = {showCartHandler}/>
      <main>
        <Meals />
      </main>
    </ContextProvider>
  );
}

export default App;
