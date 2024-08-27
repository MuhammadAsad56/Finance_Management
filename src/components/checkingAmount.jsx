import React from 'react'

const CheckingAmount = ({text, check, className}) => {
  return (
    <>
        <div  className={`text-center text-lg px-3 border border-gray-400 ${className}`}>
        <p>{text}</p>
        <p>{check}</p>
      </div>
    </>
  )
}

export default CheckingAmount