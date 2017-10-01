import React, { Component } from 'react'
import './index.css'

class LinkBanner extends Component {
  render() {
     const { headerText, bodyText } = this.props
    return (
      <div className="link-banner">
        <div className="link-banner-content-container">
          <div className="link-banner-text-head">
               {headerText}
          </div>
          <div className="link-banner-text-body">
               <i className="material-icons" id="quote">format_quote</i>
               {bodyText}
               <i className="material-icons" id="quote">format_quote</i>
          </div>
          <div className="link-banner-button-wrapper" />
        </div>
        
        <div className="link-banner-button" />
      </div>
    )
  }
}

export default LinkBanner
