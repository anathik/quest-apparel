import React, { Component } from 'react'
import './index.css'
import logoURL from './Quest_NavBar_Logo.png'
import bagURL from './ic_search_white_24dp_1x.png'

import NavLink from '../NavLink'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div
          className="Header-logo"
          style={{ backgroundImage: `url(${logoURL})` }}
        />
        <div className="HeaderLeftOfLogo">
          <NavLink text="Shop" path="/shop" />
          <NavLink text="Shop List" path="/shoplist" />
          <NavLink text="Archives" path="/archives" />
        </div>
        <div className="HeaderRightOfLogo">
          <NavLink text="On Sale" path="/sales" />
          <NavLink text="Login / Join" path="/login" />
          <NavLink text="My Bag" path="/bag" />
        </div>
        <div className="Widgets">
          <div className="Bag" style={{ backgroundImage: `url(${bagURL})` }} />
        </div>
      </div>
    )
  }
}

export default Header
