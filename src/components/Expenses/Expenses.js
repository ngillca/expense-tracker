import React from "react";
import "./Expenses.css";
import "./ExpenseItem.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
          item={props.items[0]}
        />

        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
          item={props.items[1]}
        />

        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
          item={props.items[2]}
        />
      </Card>
    </>
  );
}
