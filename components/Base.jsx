import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Motion, spring, presets } from 'react-motion';

import '../style/common.less';

export default class Base extends Component {

  constructor(props) {
    super(props);
    this.state = { left: 0, input: '', show: true, list: ['tom', 'jack'] };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState({
      show: !this.state.show
    })
    this.setState({
      left: this.state.left === 0 ? 200 : 0
    })
  }

  change (val) {
    this.setState({ input: val })
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick}>click me</button>
        {/* <h1 className={this.state.show ? 'show' : 'hide'}>show</h1> */}
        {this.state.list.map((item, index) => <h2 key={index}>{item}</h2>)}
        <input type="text" onChange={e => this.change(e.target.value)} />
        <h5>输入的值：{this.state.input}</h5>
        <CSSTransition timeout={10} className="fade" in={this.state.show}>
          <div>CSSTransition</div>
        </CSSTransition>
        <Motion style={{ x: spring(this.state.left, presets.wobbly) }}>
          {val => <div style={{ transform: `translateX(${val.x}px)` }} className='box'></div>}
        </Motion>
      </div>
    )
  }
}