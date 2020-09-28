import React from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

export default class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            categories: [],
            searchQuery: '',
            searchType: ''
        }
        this.updateState = this.updateState.bind(this);
    }

    static getDerivedStateFromProps(props, currentState) {
        if (currentState.searchQuery !== props.searchQuery) {
            return { searchQuery: props.searchQuery }
        }
        return null
    }
    
    componentDidMount() { // If used implement check for if mounted; Use componentWillUnmount()
        //this.updateState();
        this.setState({ searchType: this.props.searchType });
    } 
    
    componentDidUpdate() {
        this.updateState();
    }

    updateState() {
        axios.get('https://localhost:44323/api/Products/', {
            params: {
                searchType: this.props.searchType,
                searchQuery: this.state.searchQuery
            }
        }).then((response) => {
            this.setState({
                products: response.data.products,
                categories: response.data.categories
            })
        })
    }

    render() {
        const products = this.state.products;
        const categories = this.state.categories;
        return (
            <div className='SearchPage' >
                {
                    products.map(product => (
                    <ProductCard key={product.id} product={product} cardFunction={this.props.cardFunction}/>
                    ))
                }
                {
                    categories.map(category => (
                        <p>{category}</p>
                    ))
                }
            </div >
        );
    }
}