import React from 'react'

const Button = ({handleAddTransaction}) => {
  return (
    <>
    <button onClick={handleAddTransaction} className='rounded bg-gray-700 text-white px-2 py-0.5'>Submit</button>
    </>
  )
}

export default Button