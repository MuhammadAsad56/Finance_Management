import React from 'react'
import { useState } from 'react'
import CheckingAmount from './checkingAmount'
import IncomeOrExpense from './IncomeOrExpense'
import Button from './button'
import Input from './Input'
import Select from './select'

const Finance = () => {
    const [amount, setAmount] = useState()
    const [type, setType] = useState("income")
    const [transaction, setTransaction] = useState([])

    const handleAddTransaction = () => {
        if (amount) {
            if (isNaN(amount)) {
                alert("please enter a Number")
                setAmount("")
            } else {
                setTransaction([...transaction, { amount: Number(amount), type }])
                setAmount("")
                setType("income")
            }
        } else {
            alert("please enter Amount")
            setAmount("")
        }
    }
    const totalIncome = transaction.reduce((acc, transaction) => transaction.type == "income" ? acc + transaction.amount : acc, 0)

    const totalExpense = transaction.reduce((acc, transaction) => transaction.type == "expense" ? acc + transaction.amount : acc, 0)

    const balance = totalIncome - totalExpense

    return (
        <>
            <h2 className='text-center text-3xl font-medium mt-10'>Finance Management</h2>
            <div className='flex align-center justify-center gap-2 mt-10 p-1 flex-wrap'>
                <CheckingAmount text={"Total Income"} check={totalIncome} />
                <CheckingAmount text={"Total Expense"} check={totalExpense} />
                <CheckingAmount className={balance > 0 ? "bg-green-300" : "bg-red-300"} text={"Balance"} check={balance} />
            </div>
            <div className='flex flex-col items-center justify-center mt-10'>
                <div className='flex gap-2 items-center justify-center flex-wrap '>
                    <Input amount={amount} setAmount={setAmount} />
                    <Select type={type} setType={setType} />
                    <Button handleAddTransaction={handleAddTransaction} />
                </div>
                <div className='mt-10'>
                    <IncomeOrExpense transaction={transaction} />
                </div>
            </div>
        </>
    )
}

export default Finance