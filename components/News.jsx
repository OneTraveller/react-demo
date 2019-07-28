import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const newComponent1 = ({ match }) => (
  <div>
    <h1>{match.path}</h1>
    欧文和篮网
  </div>
)

const newComponent2 = () => (
  <div>
    詹姆斯和湖人
  </div>
)

export default class News extends Component {
  render () {

    console.log(this.props.location)

    const path = this.props.match.path;
    return (
      <div>
        <Link to={`${path}/new1`}>新闻1</Link>
        <Link to={`${path}/new2`}>新闻2</Link>
        <Route path={`${path}/new1`} component={newComponent1}></Route>
        <Route path={`${path}/new2`} component={newComponent2}></Route>
      </div>
    )
  }
}