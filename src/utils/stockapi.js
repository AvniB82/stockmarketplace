import axios from 'axios';

const API_KEY = 'e1493c9b78msh22eae3051152bf0p1c390cjsn568229af7d8b';

const getStockData = async (symbol) => {
  const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;
  return axios.get(apiUrl);
};

const getStockSymbols = async (query) => {
  const apiUrl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${API_KEY}`;
  return axios.get(apiUrl);
};

export { getStockData, getStockSymbols };
