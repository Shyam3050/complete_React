import ExpenseItem from "./ExpensesItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  if(props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found</h2>
  }
  return <ul className="expenses-list">{props.items.map((item) => {
    const {id,title,amount,date} = item;
    return <ExpenseItem key={id} items = {{title,amount,date}} />
  })}</ul>;
}

export default ExpenseList;
