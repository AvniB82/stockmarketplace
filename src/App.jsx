import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import { getStockData } from './utils/stockapi'; 
import SearchBox from './components/SearchBox';
import Slist from './components/Slist';

function App() {
  const [first, setfirst] = useState(null)
  
  useEffect(() => {
    const fetchDataAndLog = async () => {
      try {
        const data = await getStockData('AAPL');
        console.log(data);
        const res = await setfirst(data.data)
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
      {first ? (<div><Slist list={first}/></div>):(<><p>empty</p></>)}
      </div>
      
      
    </Router>
  );
}

export default App;

