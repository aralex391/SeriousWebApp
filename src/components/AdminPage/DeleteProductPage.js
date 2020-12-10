import React from 'react';
import axios from 'axios';
import AdminSearchBar from './AdminComponents/AdminSearchBar';
import ResultsPage from '../CommonComponents/SearchPage/ResultsPage';

export default class DeleteProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
    this.setSearchQuery = this.setSearchQuery.bind(this);
    this.deleteInBackend = this.deleteInBackend.bind(this);
  }

  setSearchQuery(query) {
    this.setState({ searchQuery: query });
  }

  deleteInBackend(product) {
    var r = window.confirm('Do you want to delete this product?');
    if (r === true) {
      axios.delete(
        'https://localhost:44323/api/Products/' + product.id,
      );
    }
  }

  render() {
    return (
      <div className="DeleteProductPage">
        <AdminSearchBar setSearchQuery={this.setSearchQuery} />
        <ResultsPage
          searchType={'string'}
          searchQuery={this.state.searchQuery}
          cardFunction={this.deleteInBackend}
        />
      </div>
    );
  }
}
