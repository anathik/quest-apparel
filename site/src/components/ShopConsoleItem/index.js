import React, { Component } from 'react'
import './index.css'

class StyleSquare extends Component {
  render() {
    const { backgroundImageURL, text, subtext } = this.props
    // const background = this.props.background
    // const text = this.props.text

    return (
      <div
        className="StyleSquare"
        style={{ backgroundImage: `url(${backgroundImageURL})` }}>
        <div id="ContentContainer" className="StyleSquareHover">
          <div id="SquareHeader" className="StyleSquareHover">
            {text}
          </div>
          <div id="SquareDetails" className="StyleSquareHover">
            {subtext}
          </div>
        </div>
      </div>
    )
  }
}

export default StyleSquare
