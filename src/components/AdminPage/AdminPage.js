import React from 'react'
import AddProductPage from './AddProductPage'
import DeleteProductPage from './DeleteProductPage'
import EditProductPage from './EditProductPage'

export default class AdminPage extends React.Component{
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div className='AdminPage'>
				<p>Add Product Page</p>
				<AddProductPage />
				<p>Delete Product Page</p>
				<DeleteProductPage />
				<p>Edit Product Page</p>
				<EditProductPage />
			</div>
			)
	}
}