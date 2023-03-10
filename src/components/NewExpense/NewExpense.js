import React from "react";
import { ExpenseForm } from "./ExpenseForm";
import './NewExpense.css';

export function NewExpense(props) {

    const inputSaveHandler = expense => {
        const newExpenseData = {
            ...expense,
            id: Math.random().toString()
        }
        props.onAddInput(expense);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveForm={inputSaveHandler}/>
        </div>
    )
}