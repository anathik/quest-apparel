import React, { Component } from 'react';
import './index.css';

class StyleSquare extends Component {
  render() {
    return (
      <div className="StyleSquare" style={{background: this.props.color}}>{this.props.text}</div>
    );
  }
}

export default StyleSquare;
