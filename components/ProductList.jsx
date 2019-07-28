import React, { Component } from 'react';
import { store } from '../store';

export default class ProductList extends Component {

  constructor() {
    super();
    this.list = ['苹果手机', '华为手机', 'vivo手机'];
  }

  handleAdd () {
    store.dispatch({ type: 'add' })
  }

  handleDelete () {
    store.dispatch(dispatch => {
      dispatch({ type: 'delete' })
    })
  }

  render () {
    return (
      <div>
        {store.getState().productList.map((item, index) => <h3 key={index}>{item}</h3>)}
        <button onClick={this.handleAdd}>add</button><br />
        <button onClick={this.handleDelete}>delete</button>
      </div>
    )
  }
}