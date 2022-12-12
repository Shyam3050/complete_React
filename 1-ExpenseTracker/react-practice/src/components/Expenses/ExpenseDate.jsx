import Card from "../UI/Card";
import "./ExpenseDate.css";
function ExpenseDate(props) {
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateObj = props.date;
  const year = dateObj.getFullYear();
  const date = dateObj.getDate();
  const month = monthList[dateObj.getMonth() - 1];

  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{date}</div>
    </Card>
  );
}

export default ExpenseDate;
