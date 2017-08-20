import React, { Component } from 'react'
import './index.css'

import Modal from '../Modal'

class StyleSquare extends Component {
  constructor() {
    super()

    this.state = {
      isModalVisible: false,
    }
  }

  onStyleSquareClick() {
    this.showModal()
  }

  onModalDismissal() {
    this.setState({ isModalVisible: false })
  }

  showModal() {
    this.setState({ isModalVisible: true })
  }

  renderModal() {
    return (
      <Modal onDismissalRequested={this.onModalDismissal.bind(this)}>
        HELLO WORLD
      </Modal>
    )
  }

  render() {
    const { backgroundImageURL, text, subtext } = this.props
    const { isModalVisible } = this.state

    return (
      <div
        className="StyleSquare"
        style={{ backgroundImage: `url(${backgroundImageURL})` }}
        onClick={this.onStyleSquareClick.bind(this)}>
        <div id="ContentContainer" className="StyleSquareHover">
          <div className="expand-square-modal">
            <i className="material-icons">add</i>
          </div>
          <div id="SquareHeader" className="StyleSquareHover">
            {text}
          </div>
          <div id="SquareDetails" className="StyleSquareHover">
            {subtext}
          </div>
        </div>

        {isModalVisible ? this.renderModal() : null}
      </div>
    )
  }
}

export default StyleSquare
