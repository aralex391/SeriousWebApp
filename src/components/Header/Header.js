import React from 'react';

import './Header.css';

import UserContainer from './UserContainer';
import SearchBar from './SearchBar';
import Cart from './Cart';

function Header() {
    return (
        <div className='Header'>
            <a id='HomeLink' href='http://localhost:3000/'>Serious App</a>
            <SearchBar />
            <UserContainer />
            <Cart />
        </div>
        );
}

export default Header;