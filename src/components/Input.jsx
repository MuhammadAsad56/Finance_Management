import React from 'react'

const Input = ({amount, setAmount}) => {
  return (
    <>
     <input className='border border-gray-500' placeholder=' Add Amount' type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
    </>
  )
}

export default Input