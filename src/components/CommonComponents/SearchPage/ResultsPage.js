import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import CategoryList from './CategoryList';

export default class ResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
    };

    const CancelToken = axios.CancelToken;
    this.source = CancelToken.source();
    this.linkFunction = this.linkFunction.bind(this);
  }

  componentDidMount() {
    if (this.props.searchType !== 'preview') {
      this.getFromBackend();
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.searchQuery.length < 2 &&
      (this.state.products.length || this.state.categories.length)
    ) {
      this.setState({
        products: [],
        categories: [],
      });
    } else if (
      this.props.searchQuery.length > 1 &&
      this.compareProps(prevProps, this.props)
    ) {
      this.getFromBackend();
    }
  }

  compareProps(prevProps, currentProps) {
    let result = false;

    if (
      prevProps.searchType !== currentProps.searchType ||
      prevProps.searchQuery !== currentProps.searchQuery
    ) {
      result = true;
    }

    if (
      !result &&
      currentProps.searchType === 'filter' &&
      prevProps.filters.size !== currentProps.filters.size
    ) {
      result = true;
    }
    return result;
  }

  componentWillUnmount() {
    this.source.cancel('Operation canceled by the user.');
  }

  paramsBuilder() {
    var params = new URLSearchParams();
    params.append('searchType', this.props.searchType);
    params.append('searchQuery', this.props.searchQuery);
    if (
      this.props.searchType === 'filter' &&
      this.props.filters.size > 0
    ) {
      for (var filter of this.props.filters) {
        params.append('filter', filter);
      }
    }
    return params;
  }

  getFromBackend() {
    axios
      .get('https://localhost:44323/api/Products/', {
        cancelToken: this.source.token,
        params: this.paramsBuilder(),
      })
      .then((response) => {
        this.setState({
          products: response.data.products,
          categories: response.data.categories,
        });
        if (
          this.props.searchType !== 'preview' &&
          this.props.searchType !== 'category'
        ) {
          this.props.updateProp(response.data.categories);
        }
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          console.log(error);
        }
      });
  }

  linkFunction() {
    this.setState({
      products: [],
      categories: [],
    });
  }

  render() {
    const products = this.state.products;
    return (
      <div className="SearchPage">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cardFunction={this.props.cardFunction}
            linkFunction={this.linkFunction}
          />
        ))}
        {this.props.searchType === 'preview' && (
          <CategoryList
            categories={this.state.categories}
            linkFunction={this.linkFunction}
          />
        )}
      </div>
    );
  }
}

ResultsPage.propTypes = {
  searchType: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  filters: PropTypes.instanceOf(Set),
  cardFunction: PropTypes.func, //Should be required when implemented in preview
  updateProp: PropTypes.func,
};
