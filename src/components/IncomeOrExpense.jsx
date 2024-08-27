import React from 'react'

const IncomeOrExpense = ({transaction}) => {
    return (
        <>
            <table className='text-center'>
                <thead className='text-xl'>
                    <tr>
                        <th className='w-28'>Amount</th>
                        <th>Income or Expense</th>
                    </tr>
                </thead>
                {
                    transaction.map((data, ind) => {
                        const { amount, type } = data
                        return (
                            <>
                                <tbody key={ind}>
                                    <tr>
                                        <td className='font-medium underline text-xl'>{amount}</td>
                                        <td className={`font-medium underline text-xl ${type === "income" ? "text-green-500" : "text-red-500"}`}>{type}</td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}

export default IncomeOrExpense