import React from 'react'
import axios from 'axios'

export default class AddProductForm extends React.Component {
	constructor() {
		super();

		this.productName = '';
		this.productPrice = -1;
		this.productStock = -1;
		this.productDescription = '';

		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleSubmit(event) {
		event.preventDefault();
		this.postToBackend(this.productName.value, this.productPrice.valueAsNumber, this.productStock.valueAsNumber, this.productDescription.value);
	}

	postToBackend(name, price, stock, description = '') {
		axios.post('https://localhost:44323/api/Products/', {
			name: name,
			price: price,
			stock: stock,
			description: description
		}).then((response) => {
			console.log(response);
		}).catch((error) => {
			console.log(error.response);
		});
    }

	render() {
		return (
			<div className='AddProductForm'>
				<form onSubmit={this.handleSubmit}>
					<label id='InputField'>
						<input type='text' placeholder='Name' ref={(input) => { this.productName = input }} name='name' required />
						<input type='number' placeholder='Price' ref={(input) => { this.productPrice = input }} name='price' required />
						<input type='number' placeholder='Stock' ref={(input) => { this.productStock = input }} name='stock' required />
						<textarea type='text' placeholder='Description' ref={(input) => { this.productDescription = input }} name='description' />
					</label>
					<input id='SendButton' type='submit' value='Create Product' />
				</form>
			</div>
		)
	}
}