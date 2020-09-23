import React from 'react'
import logo from '../../logo.svg';

import './ProductCard.css'

function ProductCard(props) {
    return (
        <div className='ProductCard'>
            <img src={logo} className="App-logo" id='ProductImage' alt='logo' />
            <div id='ShoppingContainer'>
                <div>
                    <a id='ProductName' href='http://vecka.nu'>{props.product.name}</a>
                </div>
                <p id='PriceTag'>{props.product.price} kr</p>
                <button id='ProductFunctionButton' onClick={() => props.cardFunction(props.product)}>function</button>
            </div>
        </div>
        );
}

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