import React from 'react';
import { DataCtxt } from './datacontext';

export default function Slist() {
  const {symbols} = React.useContext(DataCtxt);
  console.log(symbols, 'sumsum');

  return (
    <div>
      {symbols ? symbols.map((stock)=> {
        <p>{stock.symbol}</p>
      }) : 'no data'}
      <p>balls</p>
    </div>
  )
}
