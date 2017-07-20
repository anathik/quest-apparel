import React, { Component } from 'react';
import './index.css';
import logoURL from './original-fake-logo.png';

import NavLink from '../NavLink'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <NavLink text="Catalog" />
        <NavLink text="On Sale" />
        <NavLink text="Archives" />

        <div className="Header-logo" style={{ backgroundImage: `url(${logoURL})`}} />

        <NavLink text="Team" />
        <NavLink text="Contact" />
        <NavLink text="News" />
      </div>
    );
  }
}

export default Header;
