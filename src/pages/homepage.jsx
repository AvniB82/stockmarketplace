import React, { useState, useContext } from 'react';
import SearchBox from '../components/SearchBox';
import Slist from '../components/Slist';
import StockDetails from '../components/stockdetails';
import { DataCtxt } from '../components/datacontext';
import StockNews from '../components/stockNews';

export default function Homepage() {
  const { symb, symbols, fetchStock, fav } = useContext(DataCtxt);
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
        
        // this has been edited out because a card from bootstrap was added to style the page.

        // <div>
        //   <h2>Best Matches</h2>
        //   <Slist onViewDetails={handleViewDetails} />
        //   {symbols.map((match) => (
        //     <div key={match['1. symbol']}>
        //       <p>Symbol: {match['1. symbol']}</p>
        //       <p>Name: {match['2. name']}</p>
        //       <button onClick={() => handleViewDetails(match)}>
        //         View Details
        //       </button>
        //     </div>
        //   ))}
        // </div>

          <div className='container'>

            <h2>Best Matches</h2>
            <Slist onViewDetails={handleViewDetails} />
            {symbols.map((match) => (
              <div key={match['1. symbol']} className="card" style={{ width: '25rem' }}>
                <div className="card-body">
                  <p className="card-title"> {match['1. symbol']} </p>
                  <p className="card-subtitle mb-2 text-body-secondary"> {match['2. name']}</p>
                  <button onClick={() => handleViewDetails(match)}>View Details</button>
                </div>
              </div>
            ))}
            </div>
      )}

      {selectedStock && (
        <StockDetails stock={selectedStock} onClose={clearDetails} />
      )}

      {selectedStock && (
        <StockNews stock={selectedStock} />
      )}


      {symb && !selectedStock && (
        <div>
          <h2>Selected Stock Details</h2>
        </div>
      )}
    </div>
  );
}
