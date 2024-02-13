import React, { useState } from 'react';
import { DataCtxt, useContext } from './datacontext';

export default function SearchBox() {
  const { fetchSymbols } = useContext(DataCtxt);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchSymbols(searchTerm);
  };

  return (
    <div>
      <form className='form' onSubmit={handleFormSubmit}>
        <input
          type='text'
          placeholder='Search by symbol or name'
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}
