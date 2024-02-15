import React, { useContext, useState } from 'react';
import { DataCtxt } from './DataContext';

const StockDetails = ({ stock, onClose }) => {
  const { fav, setFav } = useContext(DataCtxt);
  const [selectedStock, setSelectedStock] = useState(stock);

  const addToWatchlist = () => {
    if (!fav.some((favStock) => favStock.symbol === stock['1. symbol'])) {
      const newFav = [
        ...fav,
        {
          name: stock['2. name'],
          symbol: stock['1. symbol'],
          type: stock['3. type'],
        },
      ];
      setFav(newFav);
      localStorage.setItem('watchlist', JSON.stringify(newFav)); // Save to localStorage
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
};

export default StockDetails;
