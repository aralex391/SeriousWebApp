import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './SearchBar.css';

function SearchBar(props) {

    const [searchQuery, setSearchQuery] = useState('');
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchQuery.length > 0) {
            history.push('/search/?searchString=' + searchQuery);
            props.setPreviewSearchQuery('');
        }
    };
    
    const handleChange = (event) => {
        setSearchQuery(event.target.value);
        if (event.target.value.length > 1) {
            props.setPreviewSearchQuery(event.target.value);
        }
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