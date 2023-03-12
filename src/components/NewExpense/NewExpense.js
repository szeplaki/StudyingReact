import React, { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export function NewExpense(props) {
  const [inputPanel, setInputPanel] = useState(false);

  const inputSaveHandler = (expense) => {
    const newExpenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddInput(expense);
    setInputPanel(false);
  };

  const openPanel = () => {
    setInputPanel(true);
  };

  const closePanel = () => {setInputPanel(false);
    
  };

  return (
    <div className="new-expense">
      {!inputPanel && (<button onClick={openPanel}>Add new expense</button>)}
      {inputPanel && (<ExpenseForm onSaveForm={inputSaveHandler} onClose={closePanel} />)}
    </div>
  );
};
