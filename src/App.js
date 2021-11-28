import React from 'react'
import ExpenseItem from './components/ExpenseItem'
import './index.css'

export default function App() {

  const expenses = [
    {
      id: 'i1',
      title: 'Car Insurance',
      amount: 500.21,
      date: new Date(2021, 11, 12),
    },
    {
      id: 'i2',
      title: 'Gym Fee',
      amount: 19.99,
      date: new Date(2021, 11, 15),
    },
    {
      id: 'i3',
      title: 'Rent',
      amount: 2600.00,
      date: new Date(2021, 11, 1),
    }
  ]

  return (
    <div>
      <ExpenseItem item={expenses[0]} />
      <ExpenseItem item={expenses[1]} />
      <ExpenseItem item={expenses[2]} />
    </div>
  )
}
