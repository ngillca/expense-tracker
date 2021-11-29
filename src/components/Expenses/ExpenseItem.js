import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
export default function ExpenseItem(props) {
    // array destructuring [0] current title [1] function name to set new title
    const [title, setTitle] = useState(props.title);
    const [font, setFont] = useState('expense-item__description');
    const clickHandler = () => {
        // temporarily changes value until next reload
        // but when state changes React will reload the current component
       setFont('paid')
        if (title === 'Car Insurance') {
            setTitle('Car Insurance Paid!')
        } else if (title === 'Rent') {
            setTitle('Rent Insurance Paid!')
        } else if (title === 'Gym Fee!') {
            setTitle('Gym Fee Paid!')
        }
    }

    return (
        <>
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
        <div className={font}>
            <h2>{ title }</h2>
            <div className="expense-item__price">$ { props.amount }</div>
        </div>
        <button style={{color: "white", background: "black", border: "none",
            "border-radius": "4px", padding: "10px"
            }} onClick={ clickHandler }>Pay</button>
        </Card>
        </>
    )
}
