import React from 'react'
import './index.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import Header from './components/UI/Header'

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
      <Header />
      <NewExpense />
      <Expenses items={expenses}/>

    </div>


  )
}
