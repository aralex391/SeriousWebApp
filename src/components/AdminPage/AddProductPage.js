import React from 'react'
import axios from 'axios'
import ProductForm from './AdminComponents/ProductForm'
import ProductClass from './AdminComponents/ProductClass'

export default class AddProductPage extends React.Component {
	constructor() {
		super();
		this.state = {
			product: new ProductClass()
		}
	}

	postToBackend(product) {
		axios.post('https://localhost:44323/api/Products/', {
			name: product.name,
			price: Number(product.price),
			stock: Number(product.stock),
			description: product.description
		}).then((response) => {
			console.log(response);
		}).catch((error) => {
			console.log(error.response);
		});
    }

	render() {
		return (
			<div className='AddProductName'>
				<ProductForm handleSubmit={this.postToBackend} product={this.state.product} />
			</div>
		)
	}
}