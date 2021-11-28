import React from 'react'
import './Expenses.css'
import './ExpenseItem.css'
import ExpenseItem from './ExpenseItem'

export default function Expenses(props) {
    return (
        <>
    <div className="expenses">
      <ExpenseItem 
      title={props.expenses[0].title} 
      amount={props.expenses[0].amount} 
      date={props.expenses[0].date} 
      item={props.expenses[0]} />

      <ExpenseItem 
      title={props.expenses[1].title} 
      amount={props.expenses[1].amount} 
      date={props.expenses[1].date} 
      item={props.expenses[1]} />

      <ExpenseItem 
      title={props.expenses[2].title} 
      amount={props.expenses[2].amount} 
      date={props.expenses[2].date} 
      item={props.expenses[2]} />

    </div>
        </>
    )
}
