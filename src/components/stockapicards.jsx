import React from 'react'
import { DataCtxt } from './datacontext';

export default function stockapicards({stock}) {
  const {fetchStock} = React.useContext(DataCtxt);
   
  return (
    <div className='stockCard' onClick={()=>fetchStock(stock.symbol)}>
       
        <p>{stock.name}</p>
            <p>{stock.symbol}</p>
            <p>{stock.equityType}</p>
            
    </div>
  )
}
