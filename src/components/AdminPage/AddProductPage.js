import React from 'react';
import axios from 'axios';
import ProductForm from './AdminComponents/ProductForm';
import ProductClass from './AdminComponents/ProductClass';

export default class AddProductPage extends React.Component {
  constructor() {
    super();
    this.state = {
      product: new ProductClass(),
    };
    this.buttonName = 'Add Product';
  }

  postToBackend(product) {
    axios
      .post('https://localhost:44323/api/Products/', product)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <div className="AddProductName">
        <ProductForm
          handleSubmit={this.postToBackend}
          product={this.state.product}
          buttonName={this.buttonName}
        />
      </div>
    );
  }
}
