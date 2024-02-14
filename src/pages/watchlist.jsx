import React, { useContext } from 'react';
import { DataCtxt } from '../components/datacontext';

export default function WatchList() {
  const { fav } = useContext(DataCtxt);

  return (
    <div>
      <h1>Watchlist</h1>

      <div>
        {fav &&
          fav.length > 0 &&
          fav.map((stock, index) => (
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
