import React from 'react';
import { DataCtxt, useContext } from '../components/datacontext';

export default function WatchList() {
  const { fav } = useContext(DataCtxt);
  const mockData = [
    { name: 'tesla', symbol: 'TSLA', type: 'equity' },
    { name: 'Microsoft', symbol: 'MSFT', type: 'equity' },
    { name: 'Apple', symbol: 'APPL', type: 'equity' },
  ];

  return (
    <div>
      <h1>Watchlist</h1>

      <div>
        {mockData.map((stock, index) => (
          <React.Fragment key={index}>
            <p>{stock.name}</p>
            <p>{stock.symbol}</p>
            <p>{stock.type}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
