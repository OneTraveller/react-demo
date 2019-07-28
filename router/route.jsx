import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Base from '../components/Base.jsx';
import Detail from '../components/Detail.jsx';
import News from '../components/News.jsx';
import ProductList from '../components/ProductList.jsx';

export default class MyRoute extends Component {
  render () {
    return (
      <div>
        <Route exact path='/' component={Base}></Route>
        <Route path='/detail/:id' component={Detail}></Route>
        <Route path='/news' component={News}></Route>
        <Route path='/product' component={ProductList}></Route>
      </div>
    )
  }
}