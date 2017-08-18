import React, { Component } from 'react'
import './index.css'

import NavLink from '../NavLink'

class NewsSubscribeBar extends Component {
  render() {
    return (
      <div className="NewsSubscribeBar">
        <div className="NewsSubscribeBarMessage">
          <div className="SubMessage">
            Keep up to date with the latest releases and offers
          </div>
        </div>
        <div className="NewsSubscribeBarEmail">
          <input className="SubscriberEmail" placeholder="Email Adress..." />
          <NavLink text="Submit" path="/submit" />
        </div>
      </div>
    )
  }
}

export default NewsSubscribeBar
