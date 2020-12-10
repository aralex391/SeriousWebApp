import React from 'react';
import PropTypes from 'prop-types';
import ResultsPage from './../../CommonComponents/SearchPage/ResultsPage';

function Carousel(props) {
  return (
    <div className="Carousel">
      <ResultsPage
        id="resultsPage"
        searchType="category"
        searchQuery={props.query}
      />
    </div>
  );
}

Carousel.propTypes = {
  query: PropTypes.string.isRequired,
};

export default Carousel;
