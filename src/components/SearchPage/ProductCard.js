import React from 'react'
import logo from '../../logo.svg';

import './ProductCard.css'

var productName = 'Rotate thingy \n React';
var price = 2994;
var stock = 2;

function ProductCard() {
    return (
        <div className='ProductCard'>
            <img src={logo} className="App-logo" id='ProductImage' alt='logo' />
            <div id='ShoppingContainer'>
                <div>
                    <a id='ProductName' href='http://vecka.nu'>{productName}</a>
                </div>
                <p id='PriceTag'>{price} kr</p>
                {
                    inStock()         
                }
            </div>
        </div>
        );
}

function inStock() {
    if (stock >= 1) {
        return <button id='BuyButton'>Add to cart</button>;
    } else {
        return <p>Out of Stock!</p>;
    }
}

export default ProductCard;