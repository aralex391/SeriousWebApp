import React from 'react'
import axios from 'axios'
import SearchBar from '../CommonComponents/SearchBar'
import SearchPage from '../SearchPage/SearchPage'

export default class DeleteProductPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: ''
        }
        this.setSearchQuery = this.setSearchQuery.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    setSearchQuery(query) {
        this.setState({ searchQuery: query })
    }

    deleteProduct(product) {
        var r = window.confirm("Do you want to delete this product?");
        if (r === true) {
            axios.delete('https://localhost:44323/api/Products/' + product.id);
        }
    }

    render() {
        return (
            <div className='DeleteProductPage'>
                <SearchBar setSearchQuery={this.setSearchQuery} />
                <SearchPage searchQuery={this.state.searchQuery} cardFunction={this.deleteProduct} />
            </div>
        );
    }
}