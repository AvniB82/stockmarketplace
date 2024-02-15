import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Homepage from './pages/HomePage';
import WatchList from './pages/Watchlist';

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
