import React, { useState } from "react";
import "./Expenses.css";
import "./ExpenseItem.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const getDate = new Date();
  const currentMonth = getDate.getMonth();

  // array destructuring to refresh on date change
  const [enteredMonth, setMonth] = useState(currentMonth);

  const filterDataHandler = (selectedMonth) => {
    setMonth(parseInt(selectedMonth));
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          defaultMonth={enteredMonth}
          collectFilterData={filterDataHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={Math.random().toString()}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </>
  );
}
