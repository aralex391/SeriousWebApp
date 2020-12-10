import React from 'react';
import AddProductPage from './AddProductPage';
import DeleteProductPage from './DeleteProductPage';
import EditProductPage from './EditProductPage';

export default class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorized: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ authorized: !this.state.authorized });
  }

  notSeriousButtonHandler() {
    if (this.state.authorized) {
      return (
        <div className="AdminPage">
          <p>Add Product Page</p>
          <AddProductPage />
          <p>Delete Product Page</p>
          <DeleteProductPage />
          <p>Edit Product Page</p>
          <EditProductPage />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Open admin page</button>
        {this.notSeriousButtonHandler()}
      </div>
    );
  }
}
