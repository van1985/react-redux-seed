
import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  render() {
    const { increment, decrement, counter } = this.props
    return (
      <div className="counter">
        <div className="active counter-component">
          <h1>{counter} likes</h1>
          <button type="button" className="btn" onClick={increment}>Increment</button>
          <button type="button" className="btn left-mg" onClick={decrement}>Decrement</button>
        </div>
      </div>
    )
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}

export default Counter

/*
var React = require('react');
var ReactDOM = require('react-dom');
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import api from '../services/api';

export default React.createClass({

  displayName: 'Counter',

  componentDidMount: function() {
    api.get('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj');
  },

  incrementCount: function(){
    this.setState({
      count: this.state.count + 1,
      isActive: true
    });
    this.state.isActive=true;

  },
  decrementCount: function(){
    this.setState({
      count: this.state.count - 1
    });
    if (this.state.count<0 || this.state.count==1){
      this.state.isActive=false;
    }

  },
  getInitialState: function(){
     return {
       count: null,
       isActive: null
     }
  },
  render: function(){
    //TODO: Don't like this behavir for a class variable
    this.state.isActive = this.state.isActive === null ? this.props.isActive : this.state.isActive;
    this.state.count = this.state.count === null ? this.props.count : this.state.count;
    return (
      <div className="counter">
        <div className={ this.state.isActive === true ? 'active counter-component' : 'inactive counter-component'}>
          <h1>{this.state.count} likes</h1>
          <button type="button" className="btn" onClick={this.incrementCount}>Increment</button>
          <button type="button" className="btn left-mg" onClick={this.decrementCount}>Decrement</button>
        </div>
      </div>
    );
  }
});
*/
