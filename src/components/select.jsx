import React from 'react'

const Select = ({type, setType}) => {
    return (
        <>
            <select value={type} className='border border-gray-700' onChange={e => setType(e.target.value)}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
        </>
    )
}

export default Select