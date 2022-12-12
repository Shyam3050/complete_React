import { useReducer } from "react";

import CartContext from "./cart-context";
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
function cartReducer(state, action) {
  if (action.type === "ADD") {
    let updatedItem, totalUpdatedItems;
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id == action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      totalUpdatedItems = [...state.items];
      totalUpdatedItems[existingCartItemIndex] = updatedItem;
    } else {
      totalUpdatedItems = state.items.concat(action.item);
    }
    return {
      items: totalUpdatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      let editiedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = editiedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "CLEAR") return defaultCartState;
  return defaultCartState;
}
const ContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  function addItemToCartHandler(item) {
    dispatchCartAction({ type: "ADD", item: item });
  }
  function removeItemFromCart(id) {
    dispatchCartAction({ type: "REMOVE", id: id });
  }
  function clearITemsFromCart() {
    dispatchCartAction({ type: "CLEAR" });
  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCart,
    clearItem: clearITemsFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default ContextProvider;
