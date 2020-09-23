import React from 'react'

function ProductForm(props) {

	const formProduct = ProductHandler(props.product);

	const handleSubmit = (event) => {
		event.preventDefault();
		props.handleSubmit(props.product);
	};
	const handleChange = (event) => {
		props.product[event.target.name] = event.target.value;
	};

    return (
		<div className='ProductForm'>
			<form onSubmit={handleSubmit}>
				<label id='InputField'>
					<input type='text' placeholder='Name' defaultValue={formProduct.name} onChange={handleChange} name='name' required />
					<input type='number' placeholder='Price' defaultValue={formProduct.price} onChange={handleChange} name='price' required />
					<input type='number' placeholder='Stock' defaultValue={formProduct.stock} onChange={handleChange} name='stock' required />
					<textarea type='text' placeholder='Description' defaultValue={formProduct.description} onChange={handleChange} name='description' />
				</label>
				<input id='SendButton' type='submit' value='Create Product' />
			</form>
		</div>
        );
}


function ProductHandler(product){
	if (product.name !== '') {
		return product;
	} else {
		return { 'name': '', 'price': '', 'stock': '', 'description': '' };
    }
}


export default ProductForm;