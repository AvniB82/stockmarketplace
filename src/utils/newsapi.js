import axios from "axios";

async function fetchNews(symbol) { 

    const options = {
      method: 'GET',
      url: 'https://real-time-finance-data.p.rapidapi.com/stock-news',
      params: {
        symbol: symbol,
        language: 'en'
      },
      headers: {
        'X-RapidAPI-Key': 'b2ba4e68cdmshd97bfc513d8857fp124079jsn6b6cd5bef179',
        'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
      }
    }
  try {
    
      const response = await axios.request(options);
      return response.data.data.news
      
  } catch (error) {
      console.error(error);
    }
  }

export default fetchNews;     
