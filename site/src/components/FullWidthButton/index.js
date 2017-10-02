import React, { Component } from 'react'
import './index.css'

class FullWidthButton extends Component {
  constructor() {
    super()
    this.state = {
      hovered: false,
    }
  }

  onClickScroll() {
    const element = document.getElementById("box");
  }

  hoverHandler() {
    this.setState({ hovered: true })
  }

  unhoverHandler() {
    this.setState({ hovered: false })
  }
  
  render() {
    const { buttonText, scrollTarget } = this.props
    let buttonContainerClassName = 'full-width-button-container'
    let buttonContentClassName = 'full-width-button-content'
    let buttonArrowDownClassName = 'arrow_down'    
    
    if (this.state.hovered === true) {
      buttonContainerClassName = 'full-width-button-container--hovered'
      buttonContentClassName = 'full-width-button-content--hovered'
      buttonArrowDownClassName = 'arrow_down--hovered'
    }
     
    return (
      <div 
      className={buttonContainerClassName}
      onMouseEnter={this.hoverHandler.bind(this)}
      onMouseLeave={this.unhoverHandler.bind(this)}
      >
        <div 
        className={buttonContentClassName}
        onMouseEnter={this.hoverHandler.bind(this)}
        >
          {buttonText}
        </div>
        <i 
          className="material-icons"
          id={buttonArrowDownClassName}
          onMouseEnter={this.hoverHandler.bind(this)}
          >
          keyboard_arrow_down
        </i>
      </div>
    )
  }
}

export default FullWidthButton
