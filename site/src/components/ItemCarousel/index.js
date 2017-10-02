import React, { Component } from 'react'
import './index.css'

class ItemCarousel extends Component {
  constructor() {
    super()
    this.state = {
      hovered: false,
    }
  }
  
  render() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var tz = Math.round( ( w / 2 ) / 
    Math.tan( Math.PI / 4 ) );

    if (w === !isNaN) {
      var style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = '.#item-carousel figure:nth-child(1) { transform: rotateY(   0deg ) translateZ( 100vw ); }';
      style.innerHTML = '.#item-carousel figure:nth-child(2) { transform: rotateY(  90deg ) translateZ( 100vw ); }';
      style.innerHTML = '.#item-carousel figure:nth-child(3) { transform: rotateY( 180deg ) translateZ( 100vw ); }';
      style.innerHTML = '.#item-carousel figure:nth-child(4) { transform: rotateY( 270deg ) translateZ( 100vw ); }';
      
      document.getElementsByClassName('item-carousel-wrapper')[0].appendChild(style);
    }

    return (
      <div className="item-carousel-wrapper">
        <div id="item-carousel">
          <figure>1</figure>
          <figure>2</figure>
          <figure>3</figure>
          <figure>4</figure>
        </div>
      </div>
      
    )
  }
}

export default ItemCarousel
