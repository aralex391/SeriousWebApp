import React from 'react'
import axios from 'axios'
import DeleteCard from './DeleteCard'

export default class DeleteProductPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: '',
			searchResults: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
	}

    componentDidMount() {
        this.getDeletables();
    }

    getDeletables() {
        axios.get('https://localhost:44323/api/Products/', {
            params: {
                searchQuery: this.state.searchQuery
            }
        })
            .then((response) => {
                this.setState({ searchResults: response.data })
            })
    }

    handleChange(event) {
        this.setState({ searchQuery: event.target.value });
    }

    handleClick(event) {
        event.preventDefault();
        this.getDeletables();
    }

    render() {
        const products = this.state.searchResults;
        return (
            <div className='SearchPage' >
                <form onSubmit={this.handleClick}>
                    <label id='InputField'>
                        <input type='text' placeholder='Search' value={this.state.searchQuery} onChange={this.handleChange} name='input' />
                    </label>
                    <input id='SearchButton' type='submit' value='Search' />
                </form>
                {products.map(product => (
                    <DeleteCard key={product.id} id={product.id} name={product.name} />
                ))}
            </div >
        );
    }
}
