import React, { useState } from "react";
import { ExpensesList } from "./ExpensesList";
import { Card } from "../UI/Card";
import { ExpenseFilter } from "./ExpenseFilter";
import { ExpensesChart } from "./ExpensesChart";
import "./Expenses.css";

export function Expenses(props) {
  const [year, setYear] = useState("2020");
  const yearSetter = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === year);
  
  

  return (
    <Card className="expenses">
      <ExpenseFilter selected={year} onChangeYear={yearSetter} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
