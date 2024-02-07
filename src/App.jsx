import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import { getStockData } from './utils/stockapi'; 

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
      </div>
    </Router>
  );
}

export default App;

