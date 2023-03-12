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
  console.log(filteredExpenses);

  return (
    <Card className="expenses">
      <ExpenseFilter selected={year} onChangeYear={yearSetter} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
