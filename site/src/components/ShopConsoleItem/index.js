import React, { Component } from 'react'
import './index.css'

class ShopConsoleItem extends Component {
  render() {
    const { backgroundImageURL, text, subtext } = this.props
    // const background = this.props.background
    // const text = this.props.text

    return (
      <div
        className="ShopConsoleItem"
        style={{ backgroundImage: `url(${backgroundImageURL})` }}>
        <div id="ShopContentContainer" className="ShopConsoleItemHover">
          <div id="ShopConsoleItemHeader" className="ShopConsoleItemHover">
            {text}
          </div>
          <div id="ShopConsoleItemDetails" className="ShopConsoleItemHover">
            {subtext}
          </div>
        </div>
      </div>
    )
  }
}

export default ShopConsoleItem
