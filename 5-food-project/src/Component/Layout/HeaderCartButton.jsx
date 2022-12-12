import { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnBumpAni, setBtnBumpAni] = useState(false);

  const cartCtx = useContext(CartContext);

  const noCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  const { items } = cartCtx;
  useEffect(() => {
    if(items.length === 0) {
      return 
    }
    setBtnBumpAni(true);
    const timer = setTimeout(()=>{
     setBtnBumpAni(false)
    },300)
    return () =>{
      clearTimeout(timer)
    }
  }, [items]);
  const btnClasses = `${classes.button} ${btnBumpAni ? classes.bump : ""}`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
