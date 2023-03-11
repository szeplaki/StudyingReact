import { useState } from "react";
import { ExpenseItem } from "./components/Expenses/ExpenseItem";
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";

const LISTITEMS = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
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
  
  const [expensesList, setExpensesList] = useState(LISTITEMS);

  const addInputHandler = (enteredInputData) => {
    //setExpensesList([enteredInputData, ...expensesList]); //this is the way to update the list with no regarding of scheduled React update
    setExpensesList((prevExpensesList) => {
      return [enteredInputData, ...prevExpensesList]
    })
  };

  return (
    <div>
      <NewExpense onAddInput={addInputHandler} />
      <Expenses expenses={expensesList} />
    </div>
  );
}
export default App;
