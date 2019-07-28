import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render () {
    return (
      <ul>
        <li>
          <Link to='/'>首页</Link>
        </li>
        <li>
          <Link to='/news/new1'>新闻</Link>
        </li>
        <li>
          <Link to='/detail/088'>详情</Link>
        </li>
        <li>
          <Link to='/product'>商品</Link>
        </li>
      </ul>
    )
  }
}