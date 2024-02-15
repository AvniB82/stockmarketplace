import React, { useState, useContext } from 'react';
import SearchBox from '../components/SearchBox';
import Slist from '../components/Slist';
import StockDetails from '../components/StockDetails';
import { DataCtxt } from '../components/DataContext';
import StockNews from '../components/StockNews';

export default function HomePage() {
  const { symb, symbols, fetchStock, fav } = useContext(DataCtxt);
  const [selectedStock, setSelectedStock] = useState(null);

  const handleViewDetails = (stock) => {
    setSelectedStock(stock);
  };

  const clearDetails = () => {
    setSelectedStock(null);
  };

  return (
    <div className='container'>
      <SearchBox />

      {symbols && symbols.length > 0 && !selectedStock && (
        <div>
          <h2 className='mt-4 mb-3'></h2>

          {symbols.map((match) => (
            <div
              className='card mb-3'
              key={match['1. symbol']}
              style={{ height: '50px' }}
            >
              <div className='card-body d-flex justify-content-between align-items-center'>
                <h5 className='card-title' style={{ fontSize: '1rem' }}>
                  {match['1. symbol']} - {match['2. name']}
                </h5>
                <button
                  className='btn btn-primary btn-sm'
                  onClick={() => handleViewDetails(match)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedStock && (
        <StockDetails stock={selectedStock} onClose={clearDetails} />
      )}

      {selectedStock && <StockNews stock={selectedStock} />}

      {symb && !selectedStock && (
        <div>
          <h2 className='mt-4 mb-3'>Selected Stock Details</h2>
        </div>
      )}
    </div>
  );
}
