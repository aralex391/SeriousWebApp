import React from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import { Link } from "react-router-dom"

export default class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            categories: [],
            searchQuery: ''
        }

        const CancelToken = axios.CancelToken;
        this.source = CancelToken.source();
        this.getFromBackend = this.getFromBackend.bind(this);
        this.previewBehavior = this.previewBehavior.bind(this);
    }

    static getDerivedStateFromProps(props, currentState) {
        if (currentState.searchQuery !== props.searchQuery) {
            return { searchQuery: props.searchQuery }
        }
        return null
    }
    
    componentDidMount() { // If used implement check for if mounted; Use componentWillUnmount()
        //this.getFromBackend();
        this.setState({ searchType: this.props.searchType });
    }

    componentWillUnmount() {
        this.source.cancel('Operation canceled by the user.');
    }
    
    componentDidUpdate() {
        this.getFromBackend();
    }

    getFromBackend() {
        axios.get('https://localhost:44323/api/Products/', {
            cancelToken: this.source.token,
            params: {
                searchType: this.props.searchType,
                searchQuery: this.state.searchQuery
            }
        }).then((response) => {
            this.setState({
                products: response.data.products,
                categories: response.data.categories
            })
        }).catch((error) => {
            if (axios.isCancel(error)) {
                console.log('Request canceled', error.message);
            } else {
                console.log(error);
            }
        })
    }

    previewBehavior() {
        if (this.props.searchType === 'preview') {
            const categories = this.state.categories;
            return (
                <div id='CategoryList'>
                    {
                        categories.map(
                            category => (<Link to={'/category/' + category} >{category}</Link>)
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
                    <ProductCard key={product.id} product={product} cardFunction={this.props.cardFunction}/>
                    ))
                }
                {
                    this.previewBehavior()
                }
                
            </div >
        );
    }
}