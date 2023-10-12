import React from 'react'

export const Transaction = () => {
  return (
    <li classcName="minus">
        {Transaction.text} <span>-$400</span><button className="delete-btn">x</button>
    </li>
  )
}

export default Transaction
