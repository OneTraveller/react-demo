import React, { Component } from 'react';

export default class Detail extends Component {

  jump () {
    // this.props.history.push('/news/new1')
    // this.props.history.push({ pathname: '/news/new1', query: { id: 186 } })
    this.props.history.push({ pathname: '/news/new1', state: 186 })
  }

  render () {
    console.log(this.props.match);

    return (
      <div>
        <button onClick={this.jump.bind(this)}>跳转新闻</button>
        关于nba休假期的交易  浓眉哥交易到湖人
      </div>
    )
  }
}