import React from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

export default class ResultsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            categories: []
        }

        const CancelToken = axios.CancelToken;
        this.source = CancelToken.source();
        this.previewCategoryLister = this.previewCategoryLister.bind(this);
    }

    componentDidMount() {
        if (this.props.searchType !== 'preview') {
            this.getFromBackend();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.compareProps(prevProps, this.props)) {
            this.getFromBackend();
        }
    }

    compareProps(prevProps, currentProps) {
        let res = false;

        if (prevProps.searchType !== currentProps.searchType ||
            prevProps.searchQuery !== currentProps.searchQuery) {
            res = true;
        }

        if (!res && currentProps.searchType === 'filter' &&
            prevProps.filters.size !== currentProps.filters.size) {
            res = true;
        }
        return res;
    }

    componentWillUnmount() {
        this.source.cancel('Operation canceled by the user.');
    }

    paramsBuilder() {
        var params = new URLSearchParams();
        params.append('searchType', this.props.searchType);
        params.append('searchQuery', this.props.searchQuery);
        if (this.props.searchType === 'filter' && this.props.filters.size > 0) {
                for (var filter of this.props.filters) {
                    params.append('filter', filter);
                }
        }
        return params;
    }

    getFromBackend() {
        axios.get('https://localhost:44323/api/Products/', {
            cancelToken: this.source.token,
            params: this.paramsBuilder()
        }).then((response) => {
            this.setState({
                products: response.data.products,
                categories: response.data.categories
            })
            if (this.props.searchType !== 'preview') {
                this.props.updateProp(response.data.categories);
            }
        }).catch((error) => {
            if (axios.isCancel(error)) {
                console.log('Request canceled:', error.message);
            } else {
                console.log(error);
            }
        })
    }

    previewCategoryLister() {
        if (this.props.searchType === 'preview') {
            const categories = this.state.categories;
            return (
                <div id='CategoryList'>
                    {
                        categories.map(
                            category => (<Link to={'/category/' + category} key={category}>{category}</Link>)
                        )
                    }
                </div>
            )
        }
    }

    render() {
        const products = this.state.products;
        return (
            <div className='SearchPage' >
                {
                    products.map(product => (
                        <ProductCard key={product.id} product={product}
                            cardFunction={this.props.cardFunction} />
                    ))
                }
                {
                    this.previewCategoryLister()
                }
            </div >
        );
    }
}