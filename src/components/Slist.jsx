import React from 'react';
import Stockapicards from './StockApiCards';
import { DataCtxt } from './DataContext';

export default function Slist({ onViewDetails }) {
  const { symbols } = React.useContext(DataCtxt);

  return (
    <div>
      {symbols.map((stock) => (
        <Stockapicards
          key={stock['1. symbol']}
          stock={stock}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}
