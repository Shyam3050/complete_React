import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
const DUMMY__EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e09",
    title: "Toil Paper",
    amount: 24.12,
    date: new Date(2020, 6, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY__EXPENSES);
  function addNewExpense(newExpense){
    setExpenses(prevExp => [newExpense,...prevExp]);
  }
  return (
    <div>
      <NewExpense addExpense = {addNewExpense}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
