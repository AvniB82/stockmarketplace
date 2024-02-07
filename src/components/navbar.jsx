import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar () {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Stock Market App
        </Link>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/watchlist">
              Watchlist
            </Link>
          </li>
          {/* Add more navigation items if we need */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

