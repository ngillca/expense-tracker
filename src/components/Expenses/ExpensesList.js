import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

export default function ExpensesList(props) {
    let expenseMessage = 'No expenses to show'
  
    if (props.items.length === 0) {
        return <p className="expense-list__fallback">{expenseMessage}</p>
    }
    return (
        <ul className="expense-list">
            {props.items.map((expense) => (
                <ExpenseItem
                key={Math.random().toString()}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
            ))}
        </ul>
    )
}
