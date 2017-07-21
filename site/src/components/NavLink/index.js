import React, { Component } from 'react';
import './index.css';

class NavLink extends Component {
  render() {
    return (
      <div className="NavLink">{this.props.text}</div>
    );
  }
}

export default NavLink;
