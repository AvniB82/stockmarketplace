import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import { getStockData } from './utils/stockapi'; 
import SearchBox from './components/SearchBox';

function App() {
  useEffect(() => {
    const fetchDataAndLog = async () => {
      try {
        const data = await getStockData('AAPL');
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataAndLog();
  }, []); 

  return (
    <Router>
      <div className="App">
        <Navbar />
        <SearchBox/>
      </div>
    </Router>
  );
}

export default App;

