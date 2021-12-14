import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {

    const [checkAddingExpense, setAddingExpense] = useState(false)

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
    const isEditing = () => {
        setAddingExpense(true)
    }

    const stopEditing = () => {
        setAddingExpense(false)
    }
    return (
        <div className="new-expense">
            {!checkAddingExpense && <button onClick={isEditing}>Add Expense</button>}
            {checkAddingExpense && <ExpenseForm onSaveExpenseData={ dataHandler } onCancel={stopEditing} ></ExpenseForm>}
        </div>
        // <div className="new-expense">
        //     <ExpenseForm onSaveExpenseData={ dataHandler } />
        // </div>
    )
}
