import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

export default function ExpenseItem(props) {
    return (
        <>
        <div className="expense-item">
            <ExpenseDate date={props.item.date} />
        <div className="expense-item__description">
            <h2>{ props.item.title }</h2>
            <div className="expense-item__price">$ { props.item.amount }</div>
        </div>
        </div>
        </>
    )
}
