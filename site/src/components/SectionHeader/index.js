import React, { Component } from 'react'
import './index.css'

class SectionHeader extends Component {
  render() {
    const { text } = this.props

    return (
      <div className="SectionHeader">
        <div className="HeaderLine" />
        <div className="HeaderText">
          {text}
        </div>
        <div className="HeaderLine" />
      </div>
    )
  }
}

export default SectionHeader
