import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpensesItem.css";
function ExpensesItem(props) {
  const {title,amount,date} = props.items;
  return (
    <Card className="expense-item">
      <ExpenseDate date = {date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
}

export default ExpensesItem;
