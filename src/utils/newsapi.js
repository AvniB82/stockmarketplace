import axios from "axios";

async function fetchNews(symbol) { 

    const options = {
      method: 'GET',
      url: 'https://real-time-finance-data.p.rapidapi.com/stock-news',
      params: {
        symbol: symbol,
        language: 'en',
      },
      headers: {
        'X-RapidAPI-Key': '0915ae37d3msh0d404d457e1e49cp17010djsnaf0d5e66e57f',
        'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com',
      },
    };
  try {
    
      const response = await axios.request(options);
      return response.data.data.news
      
  } catch (error) {
      console.error(error);
    }
  }

export default fetchNews;     
