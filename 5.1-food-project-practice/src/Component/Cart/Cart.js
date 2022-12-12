import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);

  function cartItemRemoveHandler(id) {
    cartCtx.removeItem(id);
  }
  function cartItemAddHandler(item) {
    cartCtx.addItem({ ...item, amount: 1 });
  }
  function orderHandler() {
    setIsCheckout(true);
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button
        type="button"
        className={classes["button--alt"]}
        onClick={props.onClose}
      >
        Close
      </button>
      <button type="button" className={classes.button} onClick={orderHandler}>
        Order
      </button>
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={props.onClose} onSubmit={submitOrderHandler} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const orderSending = <p>Sending Data...</p>;
  const orderSuccess = (
    <>
      <p>SuccessFully Ordered</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );
  function submitOrderHandler(userData) {
    setIsSubmitting(true);
    fetch("https://fir-frontend-7cedc-default-rtdb.firebaseio.com/order.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderItems: cartCtx.items,
      }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearItem();
  }
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && orderSending}
      {!isSubmitting && didSubmit && orderSuccess}
    </Modal>
  );
};
export default Cart;
