import React from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

export default class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            searchQuery: ''
        }
        this.updateState = this.updateState.bind(this);
    }

    static getDerivedStateFromProps(props, currentState) {
        if (currentState.searchQuery !== props.searchQuery) {
            return { searchQuery: props.searchQuery }
        }
        return null;
    }

    componentDidMount() {
        this.updateState();
    }

    componentDidUpdate() {
        this.updateState();
    }

    updateState() {
        axios.get('https://localhost:44323/api/Products/', {
            params: {
                searchQuery: this.state.searchQuery
            }
        })
        .then((response) => {
            this.setState({ searchResults: response.data })
        })
    }

    render() {
        const products = this.state.searchResults;
        return (
            <div className='SearchPage' >
                {products.map(product => (
                    <ProductCard key={product.id} product={product} cardFunction={this.props.cardFunction}/>
                ))}
            </div >
        );
    }
}