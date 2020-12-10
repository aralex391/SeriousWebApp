import React from 'react';
import PropTypes from 'prop-types';
import FilterSelector from './FilterSelector';
import ResultsPage from '../CommonComponents/SearchPage/ResultsPage';
import './FilterPage.css';

export default class FilterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterList: [],
      searchType: this.props.searchType,
      newFilters: new Set(),
    };

    this.updateFilterList = this.updateFilterList.bind(this);
    this.updateNewFilters = this.updateNewFilters.bind(this);
  }

  updateFilterList(updatedFilterList) {
    this.setState({ filterList: updatedFilterList });
  }

  updateNewFilters(updatedFilterList) {
    this.setState({
      newFilters: new Set(updatedFilterList),
      searchType: 'filter',
    });
  }

  render() {
    return (
      <div className="FilterPage row">
        <div className="col-2">
          {this.state.filterList.length > 0 && (
            <FilterSelector
              filterList={this.state.filterList}
              updateProp={this.updateNewFilters}
              searchQuery={this.props.searchQuery}
            />
          )}
        </div>
        <div className="col-10">
          <ResultsPage
            searchType={this.state.searchType}
            searchQuery={this.props.searchQuery}
            updateProp={this.updateFilterList}
            filters={this.state.newFilters}
          />
        </div>
      </div>
    );
  }
}

FilterPage.propTypes = {
  searchType: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
};
