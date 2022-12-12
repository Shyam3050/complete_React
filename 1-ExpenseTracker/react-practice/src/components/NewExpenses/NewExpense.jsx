import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
function NewExpense(props) {
  const [isEditing ,setIsEditing] = useState(false);
  function formDropDown (){
    setIsEditing(true);
  }
  function cancelHandler(){
    setIsEditing(false);
  }
  return <div className="new-expense">
     {!isEditing && <button type="button" onClick={formDropDown}>Add New Expense</button>}
    {isEditing && <ExpenseForm  addExpense = {props.addExpense}  cancel = {cancelHandler}/>}
  </div>
}

export default NewExpense;
