import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AdminSearchBar.css';

function AdminSearchBar(props) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setSearchQuery(searchQuery);
  };
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="AdminSearchBar">
      <form onSubmit={handleSubmit}>
        <label id="InputField">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleChange}
            name="input"
          />
        </label>
        <input id="SearchButton" type="submit" value="Search" />
      </form>
    </div>
  );
}

AdminSearchBar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
};

export default AdminSearchBar;
