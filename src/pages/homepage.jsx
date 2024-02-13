import React, { useState } from 'react';
import SearchBox from '../components/SearchBox';
import Slist from '../components/Slist';
import { DataCtxt, useContext } from '../components/datacontext';
import StockDetails from '../components/stockdetails';

export default function Homepage() {
  const { symb, symbols, fetchStock } = useContext(DataCtxt);
  const [selectedStock, setSelectedStock] = useState(null);

  const handleViewDetails = (stock) => {
    setSelectedStock(stock);
  };

  const clearDetails = () => {
    setSelectedStock(null);
  };

  return (
    <div>
      <SearchBox />

      {symbols && symbols.length > 0 && !selectedStock && (
        <div>
          <h2>Best Matches</h2>
          <Slist onViewDetails={handleViewDetails} />
          {symbols.map((match) => (
            <div key={match['1. symbol']}>
              <p>Symbol: {match['1. symbol']}</p>
              <p>Name: {match['2. name']}</p>
              <button onClick={() => handleViewDetails(match)}>
                View Details
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedStock && (
        <StockDetails stock={selectedStock} onClose={clearDetails} />
      )}

      {symb && !selectedStock && (
        <div>
          <h2>Selected Stock Details</h2>
        </div>
      )}
    </div>
  );
}
