import React, {useState} from "react";
import "./ExpenseItem.css";
import {ExpenseDate} from "./ExpenseDate";
import { Card } from "../UI/Card";
export function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);
  const handleClick = () => {
    // setTitle("Működik!")
    if (title != props.title) {
      setTitle(props.title);
    } else {
      setTitle("Működik!")
    }
    
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={handleClick}>nyimi-nyomi</button>
    </Card>
  );
}
