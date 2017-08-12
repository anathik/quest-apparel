import React, { Component } from "react";
import "./index.css";
import logoURL from "./Quest_Website_Header_logo-16.png";
import bagURL from "./ic_search_white_24dp_1x.png";

import NavLink from "../NavLink";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <NavLink text="Shop" />
        <NavLink text="On Sale" />
        <NavLink text="Archives" />

        <div
          className="Header-logo"
          style={{ backgroundImage: `url(${logoURL})` }}
        />

        <NavLink text="News" />
        <NavLink text="Team" />
        <NavLink text="Contact Us" />

        <div className="Widgets">
          <div className="Bag" style={{ backgroundImage: `url(${bagURL})` }} />
        </div>
      </div>
    );
  }
}

export default Header;
