import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses}/>

      {/* using abuse  */}
      {/* {filteredExpenses.length === 0 && <p>No Expense Found</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            price={item.price}
            date={item.date}
          />
        ))} */}

      {/* using Conditional operation */}
      {/* {filteredExpenses.length === 0 ? (
        <p>No Expense Found</p>
      ) : (
        filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            price={item.price}
            date={item.date}
          />
        ))
      )} */}
    </Card>
  );
};

export default Expenses;
