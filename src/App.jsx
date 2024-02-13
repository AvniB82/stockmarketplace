import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import WatchList from './pages/watchlist';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/watchlist' element={<WatchList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
