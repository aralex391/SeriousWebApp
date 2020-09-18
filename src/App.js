import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import SearchPage from './components/SearchPage/SearchPage';
import AdminPage from './components/AdminPage/AdminPage';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ''
        }
        this.setSearchQuery = this.setSearchQuery.bind(this);
    }

    setSearchQuery(query) {
        this.setState({ searchQuery: query })
    }

    render () {
        return (
            <div className="App">
                <Header searchQuery={this.setSearchQuery} />
                <SearchPage searchQuery={this.state.searchQuery} />
                <AdminPage />
                <header className="App-header">
                    <p>
                        Edit <code>src/App.js</code> and save {this.state.searchQuery} to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    } 
}