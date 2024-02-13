import React from 'react';

export default function StockDetails({ stock, onClose }) {
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
      <p>Match Score: {stock['9. matchScore']}</p>
      <button onClick={onClose}>Close Details</button>
    </div>
  );
}
