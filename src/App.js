import React from 'react';
import logo from './logo.svg';
import { Route, Switch, BrowserRouter as Router, useParams, useLocation } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import AdminPage from './components/AdminPage/AdminPage';
import FilterPage from './components/FilterPage/FilterPage';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.stringSearch = this.stringSearch.bind(this);
    }

    categorySearch() {
        let { category } = useParams();
        return <FilterPage searchType='category' searchQuery={category} />
    }

    stringSearch() {
        let query = this.useQuery();
        return <FilterPage searchType='string' searchQuery={query.get("searchString")} />
    }

    useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    render() {
        const browserHistory = Router.browserHistory;
        return (
            <div className="App">
                <Router history={browserHistory}>
                    <Header />
                    <Switch>
                        <Route path="/category/:category" >
                            <this.categorySearch />
                        </Route>
                        <Route path="/search" >
                            <this.stringSearch />
                        </Route>
                        <Route path="/">
                            <header className="App-header">
                                <p>
                                    Edit <code>src/App.js</code> and save to reload.
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
                        </Route>
                    </Switch>
                </Router>
                <AdminPage />
                
            </div>
        );
    } 
}