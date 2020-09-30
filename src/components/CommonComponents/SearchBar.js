import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './SearchBar.css';

function SearchBar(props) {

    const [searchQuery, setSearchQuery] = useState('');
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push('/search/?searchString=' + searchQuery);
    };//hantera tom sträng
    
    const handleChange = (event) => {
        setSearchQuery(event.target.value);
        props.setPreviewSearchQuery(event.target.value);
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