import React from 'react';

import './Header.css';

import UserContainer from './UserContainer';
import SearchBar from '../CommonComponents/SearchBar';
import Cart from './Cart';

function Header(props) {
    return (
        <div className='Header'>
            <a id='HomeLink' href='http://localhost:3000/'>Serious App</a>
            <SearchBar setSearchQuery={props.setSearchQuery} />
            <UserContainer />
            <Cart />
        </div>
        );
}

export default Header;