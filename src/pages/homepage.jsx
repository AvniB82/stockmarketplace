import React from 'react';
import SearchBox from '../components/SearchBox';
import Slist from '../components/Slist';
import { DataCtxt, useContext } from '../components/datacontext';

export default function Homepage() {
  const { symb, symbols, fetchStock } = useContext(DataCtxt);

  return (
    <div>
      <SearchBox />

      {symbols && symbols.length > 0 && (
        <div>
          <h2>Best Matches</h2>
          <Slist />
          {symbols.map((match) => (
            <div
              key={match['1. symbol']}
              onClick={() => fetchStock(match['1. symbol'])}
            >
              <p>Symbol: {match['1. symbol']}</p>
              <p>Name: {match['2. name']}</p>
            </div>
          ))}
        </div>
      )}

      {symb && (
        <div>
          <h2>Selected Stock Details</h2>
        </div>
      )}
    </div>
  );
}
