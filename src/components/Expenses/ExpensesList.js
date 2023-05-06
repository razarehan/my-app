import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">No Expense Found.</p>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          price={item.price}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
