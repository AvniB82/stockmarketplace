import React, { useContext, useEffect } from 'react';
import { DataCtxt } from '../components/DataContext';

export default function WatchList() {
  const { fav, setFav } = useContext(DataCtxt);

  useEffect(() => {
    const storedWatchlist = localStorage.getItem('watchlist');
    if (storedWatchlist) {
      setFav(JSON.parse(storedWatchlist));
    }
  }, [setFav]);

  const removeFromWatchlist = (symbol) => {
    const updatedFav = fav.filter((favStock) => favStock.symbol !== symbol);
    setFav(updatedFav);
    localStorage.setItem('watchlist', JSON.stringify(updatedFav)); // Save to localStorage
  };

  return (
    <div>
      <div>
        {fav &&
          fav.length > 0 &&
          fav.map((stock, index) => (
            <div
              className='card mb-3 mt-3'
              style={{ maxWidth: '80%', margin: '0 auto' }}
              key={index}
            >
              <div className='card-body d-flex justify-content-between align-items-center'>
                <h5 className='card-title' style={{ fontSize: '1rem' }}>
                  {stock.name} - {stock.symbol}
                </h5>
                <button
                  className='btn btn-danger btn-sm'
                  onClick={() => removeFromWatchlist(stock.symbol)}
                >
                  Remove from Watchlist
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
