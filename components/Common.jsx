import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Base from './Base.jsx';
import Detail from './Detail.jsx';
import News from './News.jsx';
import MyRoute from '../router/route.jsx';

class Common extends Component {

  constructor() {
    super();
  }

  render () {
    return (
      <Router>
        <Header />
        {/* <Route exact path='/' component={Base}></Route>
        <Route path='/detail/:id' component={Detail}></Route>
        <Route path='/news' component={News}></Route> */}
        <MyRoute />
      </Router>
    )
  }
}

export default Common;