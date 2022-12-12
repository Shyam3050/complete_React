import { useRef,useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
const MealItemForm = (props) => {
  const [amountIsValid,setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    if(enteredAmount < 1 || enteredAmount > 10){
      setAmountIsValid(false);
      return;
    }
    props.addToCart(enteredAmount)
    setAmountIsValid(true);
  };
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: 1,
          max: 10,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button type="submit">+Add</button>
      {!amountIsValid &&<p>Enter correct value between (1-5)</p>}
    </form>
  );
};
export default MealItemForm;
