import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberofCartItems = cartCtx.items.reduce(
    (total, item) => (total += item.amount),
    0
  );
  const [btnBump, setBtnBump] = useState(false);
  const { items } = cartCtx;
  const btnClasses = ` ${classes.button}  ${btnBump ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) return;
    setBtnBump(true);
    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);
    return () => {
      clearTimeout(timer)
    }
  }, [items]);
  return (
    <button type="button" className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
