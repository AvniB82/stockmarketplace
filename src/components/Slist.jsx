import React from 'react';
import { DataCtxt } from './datacontext';
import stockapicards from './stockapicards';

export default function Slist() {
  const { symbols } = React.useContext(DataCtxt);
  console.log(symbols, 'sumsum');

  return (
    <div>
      {symbols.map((stock) => (
        <stockapicards key={stock['1. symbol']} stock={stock} />
      ))}
    </div>
  );
}
