import React, { useState } from 'react';

import './SearchBar.css';

function SearchBar(props) {

    const [searchQuery, setSearchQuery] = useState('');

    const handleClick = (event) => {
        event.preventDefault();
        props.searchQuery(searchQuery);
    }; 
    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className='SearchBar'>
            <form onSubmit={handleClick}>
                <label id='InputField'>
                    <input type='text' placeholder='Search' value={searchQuery} onChange={handleChange} name='input' />
                </label>
                <input id='SearchButton' type='submit' value='Search' />
            </form>
        </div>
    );
}

export default SearchBar;