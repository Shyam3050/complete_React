import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  function titleChangeHandler(e) {
    setTitle(e.target.value);
  }
  function amountChangeHandler(e) {
    setAmount(e.target.value);
  }
  function dateChangeHandler(e) {
    setDate(e.target.value);
  }
   function formSubmitHandler(e){
    e.preventDefault();
    const newExpense = {
        id: Math.random().toString(),
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
    }
   props.addExpense(newExpense);
      setTitle('')
      setAmount('')
      setDate('')
   }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.cancel}>Cancel</button>
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
