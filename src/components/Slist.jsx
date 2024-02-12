import React from 'react';
import { DataCtxt } from './datacontext';

export default function Slist() {
  const {symbols} = React.useContext(DataCtxt);
  console.log(symbols, 'sumsum');

  return (
    <div>
      {symbols ? symbols.map((stock)=> {
<stockapicards stock={stock} />
}) : 'no data'}
      <p>symbols list placeholer</p>
    </div>
  )
}
