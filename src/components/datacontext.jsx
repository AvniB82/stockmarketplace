import React, { createContext, useContext, useState } from 'react';
import { getStockSymbols } from '../utils/stockapi';

const DataCtxt = createContext();

const DataContext = ({ children }) => {
  const [symb, setSymb] = useState(null);
  const [symbols, setSymbols] = useState([])
  const [fav, setFav] = useState([{}])


  const fetchSymbols = async (symb) => {
    try {
      const response = await getStockSymbols(symb);
      
      setSymbols(response.data.bestMatches);
      console.log(response.data)
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
