import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
export default function ExpenseItem(props) {
    
    // array destructuring [0] current title [1] function name to set new title
    const [title, setTitle] = useState(props.title)
    // temporarily changes value until next reload
    // but when state changes React will reload the current component
    const clickHandler = () => {
        setTitle('Paid')
    }


    return (
        <>
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
        <div className="expense-item__description ">
            <h2>{ title }</h2>
            <div className="expense-item__price">${ props.amount }</div>
        </div>
        <button style={{'backgroundColor': 'black', color: 'white', border: '1px solid black', 'bordeRadius': '6px', padding: '6px'}} onClick={ clickHandler }>Pay</button>
        </Card>
        </>
    )
}
