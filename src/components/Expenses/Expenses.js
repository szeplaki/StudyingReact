import React, { useState } from "react";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../UI/Card";
import { ExpenseFilter } from "./ExpenseFilter";
import "./Expenses.css";

export function Expenses(props) {
  const [year, setYear] = useState("2020");
  const yearSetter = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === year);
  
  let expenseContent = <p>There are no expenses.</p>

  return (
    <Card className="expenses">
      <ExpenseFilter selected={year} onChangeYear={yearSetter} />
      {filteredExpenses.length > 0 ? 
      expenseContent = filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        /> 
      )) : expenseContent}
    </Card>
  );
}
