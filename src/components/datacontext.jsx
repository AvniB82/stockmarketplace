import React, { createContext, useContext, useState } from 'react';
import { getStockSymbols } from '../utils/stockapi';

const DataCtxt = createContext();

const DataContext = ({ children }) => {
  const [symb, setSymb] = useState(null);
  const [symbols, setSymbols] = useState([]);

  const fetchSymbols = async () => {
    try {
      const response = await getStockSymbols();
      setSymbols(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DataCtxt.Provider value={{ symb, setSymb, symbols, fetchSymbols }}>
      {children}
    </DataCtxt.Provider>
  );
};

export { DataCtxt, DataContext };
