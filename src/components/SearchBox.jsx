import React, { useState } from 'react';
import { DataCtxt, useContext } from './DataContext';
import './SearchBox.css';


export default function SearchBox() {
  const { fetchSymbols } = useContext(DataCtxt);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      
      const response = await fetchSymbols(searchTerm);

      if (response.data.bestMatches.length === 0) {
        setError('No matching stocks found. Please enter a valid symbol.');
      } else {
        setError('');
      }
    } catch (error) {
      setError(
        'There are no matching stocks or free API limit has been reached'
      );
    }
  };

  return (
    <div className='hero-banner'>
      <img src="images/logo.png" alt="Logo" className="logo" />
      <div className="search-container">
        <form className='form' onSubmit={handleFormSubmit}>
          <input
            type='text'
            placeholder='Search by symbol or name'
            value={searchTerm}
            onChange={handleInputChange}
            className='input-field'
          />
          <button type='submit' className="button">Search</button>
        </form>
        {error && (
          <div className="error-message" style={{ color: 'red', textAlign: 'center' }}>{error}</div>
        )}
      </div>
    </div>
  );
        }
