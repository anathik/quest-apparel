import React from 'react'
import './index.css'

const PromoBar = props => {
  return (
    <div className="promotion-bar">
      <div className="promotion-message">
        {props.text}
      </div>
      <div className="promotion-bar-close">
        <i className="material-icons" id="close">close</i>
      </div>
    </div>
  )
}

export default PromoBar
