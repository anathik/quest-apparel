import React from 'react'
import './index.css'

const PromoBar = props => {
  return (
    <div className="PromoBar">
      <div className="PromoGarnish1" />
      <div className="PromoContent">
        <div className="Promotion">
          {props.text}
        </div>
      </div>
      <div className="PromoGarnish2" />
      <div className="PromoCloser">
        <i className="material-icons" id="PromoCloser" />
      </div>
    </div>
  )
}

export default PromoBar
