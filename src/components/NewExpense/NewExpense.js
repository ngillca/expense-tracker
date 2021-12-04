import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {
    // collect data from ExpenseForm
    // then pass up to App.js

    const dataHandler = (data) => {
        //console.log(data)
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        //console.log('data in parent after spread -> ',expenseData)
        props.onAddExpense(data)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={ dataHandler } />
        </div>
    )
}
