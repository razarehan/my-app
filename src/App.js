import React, {useState} from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const initial_expenses = [
    {
      id: "e101",
      title: "Car Insurance",
      price: 26000,
      date: new Date(2023, 1, 25),
    },
    {
      id: "e102",
      title: "AC Servicing",
      price: 500,
      date: new Date(2023, 3, 13),
    },
    {
      id: "e103",
      title: "Car Servicing",
      price: 3800,
      date: new Date(2023, 1, 28),
    },
  ];
  const [expenses, setExpenses] = useState(initial_expenses);
  
  const addExpenseDataHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;