import React, { Component } from 'react'
import './index.css'

class SectionHeader extends Component {
  render() {
    const { text } = this.props

    return (
      <div className="section-header">
        <div className="section-header-line" />
        <div className="section-header-text">
          {text}
        </div>
        <div className="section-header-line" />
      </div>
    )
  }
}

export default SectionHeader
