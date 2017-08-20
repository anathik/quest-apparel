import React, { Component } from 'react'

import './index.css'

import ShopConsoleItem from '../ShopConsoleItem/index.js'

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
            <div className="ClothingShowcaseContainerA">
              <div className="ClothingShowcaseContainerB">
                <ShopConsoleItem text="Box!" />
                <ShopConsoleItem text="Box!" />
                <ShopConsoleItem text="Box!" />
                <ShopConsoleItem text="Box!" />
                <ShopConsoleItem text="Box!" />
                <ShopConsoleItem text="Box!" />
                <ShopConsoleItem text="Box!" />
                <ShopConsoleItem text="Box!" />
                <ShopConsoleItem text="Box!" />
                <ShopConsoleItem text="Box!" />
                <ShopConsoleItem text="Box!" />
                <ShopConsoleItem text="Box!" />
              </div>
            </div>
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
