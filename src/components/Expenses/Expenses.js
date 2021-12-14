import React, { useState } from "react";
import "./Expenses.css";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './ExpensesList'
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {
  const getDate = new Date();
  const currentMonth = getDate.getMonth();

  // array destructuring to refresh on date change
  const [enteredMonth, setMonth] = useState(currentMonth);

  const filterDataHandler = (selectedMonth) => {
    setMonth(parseInt(selectedMonth));
  };

  // filter returns a subset of an array from
  // a bigger array given some condition is true
  const filteredExpenses = props.items.filter(expense => {
    if (enteredMonth === -1) {
      return props.items
    }
    return expense.date.getMonth() === enteredMonth;
  })


  
  return (
    <>
    <Card className="expenses">
        <ExpensesFilter
          defaultMonth={enteredMonth}
          collectFilterData={filterDataHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
}
