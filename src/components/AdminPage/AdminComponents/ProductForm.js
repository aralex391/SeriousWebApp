import React from 'react';
import PropTypes from 'prop-types';

function ProductForm(props) {
  const formProduct = ProductHandler(props.product);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(props.product);
  };
  const handleChange = (event) => {
    if (event.target.type === 'number') {
      props.product[event.target.name] = event.target.valueAsNumber;
    } else {
      props.product[event.target.name] = event.target.value;
    }
  };

  return (
    <div className="ProductForm">
      <form onSubmit={handleSubmit}>
        <label id="InputField">
          <input
            type="text"
            placeholder="Category"
            defaultValue={formProduct.category}
            onChange={handleChange}
            name="category"
            required
          />
          <input
            type="text"
            placeholder="Name"
            defaultValue={formProduct.name}
            onChange={handleChange}
            name="name"
            required
          />
          <input
            type="number"
            placeholder="Price"
            defaultValue={formProduct.price}
            onChange={handleChange}
            name="price"
            required
          />
          <input
            type="number"
            placeholder="Stock"
            defaultValue={formProduct.stock}
            onChange={handleChange}
            name="stock"
            required
          />
          <textarea
            type="text"
            placeholder="Description"
            defaultValue={formProduct.description}
            onChange={handleChange}
            name="description"
          />
        </label>
        <input
          id="SendButton"
          type="submit"
          value={props.buttonName}
        />
      </form>
    </div>
  );
}

function ProductHandler(product) {
  if (product.name !== '') {
    return product;
  } else {
    return {
      category: '',
      name: '',
      price: '',
      stock: '',
      description: '',
    };
  }
}

ProductForm.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default ProductForm;
