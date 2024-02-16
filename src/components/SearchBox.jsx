import React, { useState } from 'react';
import { DataCtxt, useContext } from './DataContext';
import './SearchBox.css';

export default function SearchBox() {
  const { fetchSymbols } = useContext(DataCtxt);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetchSymbols(searchTerm);
      console.log(response);
    } catch (error) {
      console.error('An error occurred during symbol search:', error);
    }
  };

  return (
    <div className='hero-banner'>
      <img src='images/logo.png' alt='Logo' className='logo' />
      <div className='search-container'>
        <form className='form' onSubmit={handleFormSubmit}>
          <input
            type='text'
            placeholder='Search by symbol or name'
            value={searchTerm}
            onChange={handleInputChange}
            className='input-field'
          />
          <button type='submit' className='button'>
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
