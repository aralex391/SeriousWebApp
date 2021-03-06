import React from 'react';

import './Header.css';

import UserContainer from './UserContainer';
import PreviewSearchContainer from './PreviewSearchContainer';
import Cart from './Cart';

function Header(props) {
  return (
    <div className="Header">
      <a id="HomeLink" href="http://localhost:3000/">
        Serious App
      </a>
      <PreviewSearchContainer />
      <UserContainer />
      <Cart />
    </div>
  );
}

export default Header;
