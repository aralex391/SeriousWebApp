import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../logo.svg';

import './ProductCard.css';

function ProductCard(props) {
  return (
    <div className="ProductCard col-3">
      <img
        src={logo}
        className="App-logo "
        id="ProductImage"
        alt="logo"
      />
      <div id="ShoppingContainer" className="row">
        <div>
          <a
            id="ProductName"
            className="col-11"
            href="http://vecka.nu"
          >
            {props.product.name}
          </a>
        </div>
        <p id="PriceTag" className="col-6">
          {props.product.price} kr
        </p>
        <button
          id="ProductFunctionButton"
          className="col-6"
          onClick={() => props.cardFunction(props.product)}
        >
          <span className="ButtonText col-11">function</span>
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
  cardFunction: PropTypes.func.isRequired,
};

export default ProductCard;

/*
function inStock(stock) {
    if (stock >= 1) {
        return <button id='BuyButton'>Add to cart</button>;
    } else {
        return <p>Not in stock!</p>;
    }
}
*/
