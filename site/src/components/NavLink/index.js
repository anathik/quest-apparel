import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const NavLink = props => {
  return (
    <Link to={props.path} className="NavLink">
      <div className="navigation-link-textbox">
        {props.text}
      </div>
    </Link>
  )
}

export default NavLink
