import React from 'react';

import './SearchBar.css';

function SearchBar() {
    return (
        <div className='SearchBar'>
            <form>
                <label id='InputField'>
                    <input type='text' placeholder='Search' name='input' />
                </label>
                <input id='SearchButton' type='submit' value='Search' />
            </form>
        </div>
    );
}

export default SearchBar;