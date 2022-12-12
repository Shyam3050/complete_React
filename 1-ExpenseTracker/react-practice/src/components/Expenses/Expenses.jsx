import { useState } from "react";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import Chart from "../Chart/Chart";

import "./Expenses.css";
function Expenses(props) {
  const [filterdYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterdYear}
        onChangeFilter={filterChangeHandler}
      />
      <Chart expenses = {filteredExpenses}/>
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
