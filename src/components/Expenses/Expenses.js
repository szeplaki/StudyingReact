import React, { useState } from "react";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../UI/Card";
import { ExpenseFilter } from "./ExpenseFilter";
import './Expenses.css';

export function Expenses(expenses) {

    const [year, setYear] = useState("2020");
    const yearSetter = selectedYear => {
      setYear(selectedYear);
    }

    return (
        <Card className="expenses">
          <ExpenseFilter selected={year} onChangeYear={yearSetter} />
          <ExpenseItem
            title={expenses.expenses[0].title}
            amount={expenses.expenses[0].amount}
            date={expenses.expenses[0].date}
          />
          <ExpenseItem 
          title={expenses.expenses[1].title}
          amount={expenses.expenses[1].amount}
          date={expenses.expenses[1].date}
          />
          <ExpenseItem 
          title={expenses.expenses[2].title}
          amount={expenses.expenses[2].amount}
          date={expenses.expenses[2].date}
          />
          <ExpenseItem 
          title={expenses.expenses[3].title}
          amount={expenses.expenses[3].amount}
          date={expenses.expenses[3].date}
          />
        </Card>
      );
};