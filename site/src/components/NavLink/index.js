import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const NavLink = props => {
  return (
    <Link to={props.path} className="NavLink">
      {props.text}
    </Link>
  )
}

export default NavLink
