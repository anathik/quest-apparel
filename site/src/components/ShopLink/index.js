import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const ShopLink = props => {
  return (
    <Link to={props.path} className="ShopLink">
      {props.text}
    </Link>
  )
}

export default ShopLink
