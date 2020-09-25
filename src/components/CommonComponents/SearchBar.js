import React, { useState } from 'react';

import './SearchBar.css';

function SearchBar(props) {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.setSearchQuery(searchQuery);
    }; 
    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className='SearchBar'>
            <form onSubmit={handleSubmit}>
                <label id='InputField'>
                    <input type='text' placeholder='Search' value={searchQuery} onChange={handleChange} name='input' />
                </label>
                <input id='SearchButton' type='submit' value='Search' />
            </form>
        </div>
    );
}

export default SearchBar;