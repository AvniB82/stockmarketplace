import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import { getStockData } from './utils/stockapi';
import SearchBox from './components/SearchBox';
import Slist from './components/Slist';
import { DataCtxt } from './components/datacontext'; 

function App() {
  const { symb } = useContext(DataCtxt); 
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchDataAndLog = async () => {
      try {
        if (symb) {
          const data = await getStockData(symb);
          setStockData(data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataAndLog();
  }, [symb]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <SearchBox />
        <div><Slist /></div>
      </div>
    </Router>
  );
}

export default App;
