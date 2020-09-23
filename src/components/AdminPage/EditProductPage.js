import React from 'react'
import axios from 'axios'
import SearchPage from '../SearchPage/SearchPage'
import SearchBar from '../CommonComponents/SearchBar'
import ProductForm from './AdminComponents/ProductForm'
import ProductClass from './AdminComponents/ProductClass'

export default class EditProductForm extends React.Component {
	constructor() {
		super();
		this.state = {
			searchQuery: '',
			product: new ProductClass(),
			renderForm: false
		}

		this.setSearchQuery = this.setSearchQuery.bind(this);
		this.setProduct = this.setProduct.bind(this);
		this.renderForm = this.renderForm.bind(this);
		this.putToBackend = this.putToBackend.bind(this);
	}

	setProduct(updatedProduct) {
		this.setState({ product: updatedProduct, renderForm: true });
	}

	setSearchQuery(query) {
		if (query !== '') {
			this.setState({ searchQuery: query })
		} else {
			this.setState({ searchQuery: query, renderForm: false })
        }
	}

	putToBackend(product) {
		axios.put('https://localhost:44323/api/Products/', {
			id: Number(product.id),
			name: product.name,
			price: Number(product.price),
			stock: Number(product.stock),
			description: product.description
		}).then((response) => {
			console.log(response);
		}).catch((error) => {
			console.log(error.response);
		});

		this.setState({ renderForm: false })
	}

	renderForm() {
		if (this.state.renderForm) {
			return <ProductForm handleSubmit={this.putToBackend} product={this.state.product} />
		}
		return null
    }

	render() {
		return (
			<div className='EditProductPage'>
				<SearchBar setSearchQuery={this.setSearchQuery} />
				<SearchPage searchQuery={this.state.searchQuery} cardFunction={this.setProduct} />
				{
					this.renderForm()
                }
			</div>
		);
	}
}