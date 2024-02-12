import React from 'react'

export default function stockapicards({stock}) {
   
  return (
    <div className='stockCard'>
        <a href='#'>
        <p>{stock.name}</p>
            <p>{stock.symbol}</p>
            <p>{stock.equityType}</p>
            </a>
    </div>
  )
}
