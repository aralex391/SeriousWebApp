import React from 'react'
import AddProductForm from './AddProductForm'
import DeleteProductPage from './DeleteProductPage/DeleteProductPage'

export default class AdminPage extends React.Component{
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div className='AdminPage'>
				<AddProductForm />
				<p>Don't be rude</p>
				<DeleteProductPage />
			</div>
			)
	}
}