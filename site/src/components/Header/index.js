import React, { Component } from 'react'
import './index.css'
import logoURL from './Quest_NavBar_Logo.png'
import NavLink from '../NavLink'

class Header extends Component {
  render() {
    return (
      <div className="navigation-bar">
        <div className="navigation-left-container"> 
          <NavLink text="Archives" path="/archives" />
          <NavLink text="Shop" path="/shop" />
          <NavLink text="Home" path="/" />
          <div className="navigation-widgets-left">
            <i className="material-icons" id="account">account_circle</i>
          </div>
        </div>
        <div
          className="header-logo"
          style={{ backgroundImage: `url(${logoURL})` }}
        />
        <div className="navigation-right-container">
          <NavLink text="Sales" path="/sales" />
          <NavLink text="Login" path="/login" />
          <NavLink text="My Bag" path="/bag" />
          <div className="navigation-widgets-right">
            <i className="material-icons" id="share">share</i>
            <i className="material-icons" id="search">search</i>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
