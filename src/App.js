import React, { useState } from "react";
import "./index.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Header from "./components/UI/Header";

const STATIC_EXPENSES = [
  {
    id: "i1",
    title: "Car Insurance",
    amount: 500.21,
    date: new Date(2021, 11, 12),
  },
  {
    id: "i2",
    title: "Gym Fee",
    amount: 19.99,
    date: new Date(2021, 11, 15),
  },
  {
    id: "i3",
    title: "Rent",
    amount: 2600.0,
    date: new Date(2021, 11, 1),
  },
];

export default function App() {
  
  const [expenses, setNewExpense] = useState(STATIC_EXPENSES)

  
  const addExpenseHandler = (expense) => {
    // const newData = {
    //   ...expense
    // }
    

    setNewExpense((prevState) => {
      return [expense, ...prevState]
    })
    
  }
  return (
    <div>
      <Header />
      <NewExpense onAddExpense={ addExpenseHandler }/>
      <Expenses  items={expenses} />
    </div>
  );
}
