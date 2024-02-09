import React, { useState } from 'react';
import './searchbox.css';


import { useContext } from 'react';
import { DataCtxt } from '../components/datacontext'; 

function Form() {
  const { setSymb } = useContext(DataCtxt);

  const [formData, setFormData] = useState({
    searchBox: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    console.log(name);
    console.log(value);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSymb(formData.searchBox);
  };

  return (
    <div>
      <form className="form">
        <input
          value={formData.searchBox}
          name="searchBox"
          onChange={handleInputChange}
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
