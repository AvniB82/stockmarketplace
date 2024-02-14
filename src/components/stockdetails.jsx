import React, { useContext, useState } from 'react';
import { DataCtxt } from './DataContext';

export default function StockDetails({ stock, onClose }) {
  const { fav, setFav } = useContext(DataCtxt);
  const [selectedStock, setSelectedStock] = useState(stock);

  const addToWatchlist = () => {
    if (
      !fav.some((favStock) => favStock.symbol === selectedStock['1. symbol'])
    ) {
      setFav((prevFav) => [
        ...prevFav,
        {
          name: selectedStock['2. name'],
          symbol: selectedStock['1. symbol'],
          type: selectedStock['3. type'],
        },
      ]);
    }
  };

  return (
    <div>
      <h2>{stock['2. name']}</h2>
      <p>Symbol: {stock['1. symbol']}</p>
      <p>Type: {stock['3. type']}</p>
      <p>Region: {stock['4. region']}</p>
      <p>Market Open: {stock['5. marketOpen']}</p>
      <p>Market Close: {stock['6. marketClose']}</p>
      <p>Timezone: {stock['7. timezone']}</p>
      <p>Currency: {stock['8. currency']}</p>
      <button onClick={onClose}>Close Details</button>
      <button onClick={addToWatchlist}>Add to Watchlist</button>
    </div>
  );
}
