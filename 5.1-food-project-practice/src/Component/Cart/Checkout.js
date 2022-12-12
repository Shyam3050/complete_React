import { useRef, useState } from "react";
import classes from "./Checkout.module.css";
function isEmpty(val) {
  return val.trim() === "";
}
function isFiveChar(val) {
  return val.length === 6;
}
const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    city: true,
    street: true,
    postal: true,
  });

  const nameRef = useRef();
  const cityRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  function orderConfirmHandler(e) {
    e.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredCity = cityRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostal = postalRef.current.value;

    const nameValidity = !isEmpty(enteredName);
    const cityValidity = !isEmpty(enteredCity);
    const streetValidity = !isEmpty(enteredStreet);
    const postalValidity = isFiveChar(enteredPostal);

    setFormInputValidity({
      name: nameValidity,
      city: cityValidity,
      street: streetValidity,
      postal: postalValidity,
    });

    const formValidity =
      nameValidity && cityValidity && streetValidity && postalValidity;
    if (!formValidity) {
      return;
    }
    props.onSubmit({
      name: enteredName,
      city: enteredCity,
      street: enteredStreet,
      postal: enteredPostal,
    });
  }

  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputValidity.street ? "" : classes.invalid
  }`;
  const postalControlClasses = `${classes.control} ${
    formInputValidity.postal ? "" : classes.invalid
  }`;
  return (
    <form onSubmit={orderConfirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formInputValidity.name && (
          <p className={classes.alert_text}>Enter correct Name</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formInputValidity.city && (
          <p className={classes.alert_text}>Enter correct City</p>
        )}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formInputValidity.street && (
          <p className={classes.alert_text}>Enter correct Street</p>
        )}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalRef} />
        {!formInputValidity.postal && (
          <p className={classes.alert_text}>Enter correct Postal Code</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};
export default Checkout;
