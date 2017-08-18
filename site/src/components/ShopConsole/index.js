import React, { Component } from 'react'
import './index.css'

class ShopConsole extends Component {
  render() {
    return (
      <div className="ShopConsole">
        <div className="ShopConsoleFilterBody">
          <div className="FilterBodyHeader">
            <div className="FilterBodyHeaderTitle">Filters</div>
          </div>
        </div>
        <div className="ShopConsoleClothingBody">
          <div className="ClothingBodyContainer">
            <div className="ClothingBodyHeader" />
            <div className="ClothingShowcaseContainer" />
            <div className="ClothingBodyFooter">
              <div className="FilterBodyHeaderTitle">Filters</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShopConsole
