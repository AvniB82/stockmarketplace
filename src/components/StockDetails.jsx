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
    <div className='card mt-4 mx-auto' style={{ width: '60%' }}>
      <div className='card-body text-center'>
        <h2 className='card-title'>{stock['2. name']}</h2>
        <p className='card-text'>Symbol: {stock['1. symbol']}</p>
        <p className='card-text'>Type: {stock['3. type']}</p>
        <p className='card-text'>Region: {stock['4. region']}</p>
        <p className='card-text'>Market Open: {stock['5. marketOpen']}</p>
        <p className='card-text'>Market Close: {stock['6. marketClose']}</p>
        <p className='card-text'>Timezone: {stock['7. timezone']}</p>
        <p className='card-text'>Currency: {stock['8. currency']}</p>
        <div className='mt-3'>
          <button className='btn btn-secondary btn-sm m-4' onClick={onClose}>
            Close Details
          </button>
          <button className='btn btn-primary btn-sm' onClick={addToWatchlist}>
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
}
