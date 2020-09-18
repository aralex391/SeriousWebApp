import React from 'react'
import logo from '../../logo.svg';

import './ProductCard.css'

function ProductCard(props) {
    return (
        <div className='ProductCard'>
            <img src={logo} className="App-logo" id='ProductImage' alt='logo' />
            <div id='ShoppingContainer'>
                <div>
                    <a id='ProductName' href='http://vecka.nu'>{props.name}</a>
                </div>
                <p id='PriceTag'>{props.price} kr</p>
                {
                    inStock(props.stock)
                }
            </div>
        </div>
        );
}

function inStock(stock) {
    if (stock >= 1) {
        return <button id='BuyButton'>Add to cart</button>;
    } else {
        return <p>Not in stock!</p>;
    }
}

export default ProductCard;