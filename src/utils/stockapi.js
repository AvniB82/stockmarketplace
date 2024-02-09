import axios from 'axios';

const API_KEY = '0915ae37d3msh0d404d457e1e49cp17010djsnaf0d5e66e57f';

const getStockData = async (symbol) => {
  const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;
  return axios.get(apiUrl);
};

const getStockSymbols = async (query) => {
  const apiUrl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${API_KEY}`;
  return axios.get(apiUrl);
};

export { getStockData, getStockSymbols };
