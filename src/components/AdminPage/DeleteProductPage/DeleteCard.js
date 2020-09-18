import React from 'react'
import axios from 'axios'
import './DeleteCard.css'
import logo from '../../../logo.svg';

function DeleteCard(props) {
    return (
        <div className='DeleteCard'>
            <p id='ProductId' >{props.id}</p>
            <a id='ProductName' href='http://vecka.nu'>{props.name}</a>
            <img src={logo} className="App-logo" id='DeleteImage' alt='logo' />
            <button onClick={() => DeleteConfirm(props.id)} id='BuyButton'>Delete this</button>
        </div>
    );
}

function DeleteConfirm(productId) {
    var r = window.confirm("Do you want to delete this product?");
    if (r === true) {
        axios.delete('https://localhost:44323/api/Products/' + productId);
    }
}

export default DeleteCard;