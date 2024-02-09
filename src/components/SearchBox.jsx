import React, { useState } from 'react';
import './searchbox.css';


import { useContext } from 'react';
import { DataCtxt } from '../components/datacontext'; 

function Form() {
  const { setSymb, fetchSymbols } = useContext(DataCtxt);
  const [first, setfirst] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSymb();
    console.log('this is the symbol', first)
    fetchSymbols(first);
  };

  return (
    <div>
      <form className="form">
        <input
          value={first}
          name="searchBox"
          onChange={(e)=> setfirst(e.target.value)}
          type="text"
          placeholder="Search by symbol or name"
        />
        <button type="button" onClick={handleFormSubmit}>
          Search
        </button>
      </form>
    </div>
  );
}

export default Form;
