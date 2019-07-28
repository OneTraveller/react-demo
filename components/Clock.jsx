import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = { date: new Date, timer: null }
  }

  componentDidMount () {
    this.state.timer = setInterval(() => {
      this.setState({ date: new Date })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.state.timer)
  }

  render () {
    return (
      <div>
        <h1>clock</h1>
        <h2>{this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Clock;