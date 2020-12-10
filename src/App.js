import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import AdminPage from './components/AdminPage/AdminPage';
import FilterPage from './components/FilterPage/FilterPage';
import HomePage from './components/HomePage/HomePage';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.stringSearch = this.stringSearch.bind(this);
  }

  categorySearch(props) {
    let { category } = props.match.params;
    return (
      <FilterPage searchType="category" searchQuery={category} />
    );
  }

  stringSearch(props) {
    let query = this.useQuery(props.location.search);
    return (
      <FilterPage
        searchType="string"
        searchQuery={query.get('searchString')}
      />
    );
  }

  useQuery(search) {
    return new URLSearchParams(search);
  }

  render() {
    const browserHistory = Router.browserHistory;
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Header />
          <div className="row">
            <Switch>
              <Route
                path="/category/:category"
                component={this.categorySearch}
              />
              <Route path="/search" component={this.stringSearch} />
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </Router>
        <AdminPage className="row" />
      </div>
    );
  }
}
