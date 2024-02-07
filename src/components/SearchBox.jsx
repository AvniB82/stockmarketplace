import React, { useState } from 'react';
import './style.css';

function Form() {

    const [formData, setFormData] = useState({
        searchBox: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(value)

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();


    }

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
                
                <button type="button" onclick={handleFormSubmit}>
                    Search
                </button>
            </form>
        </div>
    );
}

export default Form;