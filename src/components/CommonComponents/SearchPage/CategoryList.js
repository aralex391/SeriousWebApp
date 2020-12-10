import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CategoryList(props) {
  const categories = props.categories;

  return (
    <div id="CategoryList">
      {categories.map((category) => (
        <Link
          to={'/category/' + category}
          onClick={props.linkFunction}
          key={category}
        >
          {category}
        </Link>
      ))}
    </div>
  );
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  linkFunction: PropTypes.func.isRequired,
};

export default CategoryList;
