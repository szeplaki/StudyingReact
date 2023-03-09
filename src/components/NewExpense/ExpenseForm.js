import React, { useState } from "react";
import './ExpenseForm.css';
export function ExpenseForm() {
    //this is the first approach when we define different states

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    //this is the second approach when we define a state, but with an object

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: ""
    // })
    // const titleChangeHandler = (event) => {
    //     setUserInput({           //ez is különbség, hogy nem setEnteredTitle
    //         ...userInput,
    //         enteredTitle: event.target.value
    //     });
    // }
    // const amountChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredAmount: event.target.value
    //     });
    // }
    // const dateChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredDate: event.target.value
    //     });
    // }

    //this is the third approach, when the state update is very dependent on the previous state

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: ""
    // })
    // const titleChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {
    //             ...prevState, 
    //             enteredTitle: event.target.value
    //         }
    //     });
    // }
    // const amountChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {
    //             ...prevState,
    //             enteredAmount: event.target.value
    //         }
    //     });
    // }
    // const dateChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {
    //             ...prevState,
    //             enteredDate: event.target.value
    //         }
    //     });
    // }

    const submitHandler = (event) => {
        event.preventDefault();
        
        const inputData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__controls">
                <label>Amount</label>
                <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__controls">
                <label>Date</label>
                <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
            </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}