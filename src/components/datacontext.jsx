import React, { createContext, useContext, useState } from 'react';
import { getStockSymbols } from '../utils/stockapi';

const DataCtxt = createContext();

const DataContext = ({ children }) => {
  const [symb, setSymb] = useState(null);
  const [symbols, setSymbols] = useState([])
  const [fav, setFav] = useState([{}])
  const [stock, setStock] = useState(null);



  const fetchSymbols = async (symb) => {
    try {
      const response = await getStockSymbols(symb);
      
      setSymbols(response.data.bestMatches);
      
    } catch (error) {
      console.error(error);
    }
  };

  const fetchStock = async (symb) => {
    try {
      const response = await getStockData(symb);
      
     // setSymb(response);
      setStock(response);
      
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <DataCtxt.Provider value={{ symb, setSymb, symbols, fetchSymbols, fetchStock }}>
      {children}
    </DataCtxt.Provider>
  );
};

export { DataCtxt, DataContext };
