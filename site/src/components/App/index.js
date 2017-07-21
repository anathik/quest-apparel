import React, { Component } from 'react';
import Slider from 'react-slick';
import './index.css';

import Header from '../Header'

class App extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 650,
      slidesToShow: 1,
      slidesToScroll: 1

    };
    return (
      <div className="App">
        <Header />
        <Slider className="Slider"{...settings}>
          <div id="Slide1"></div>
          <div id="Slide2"></div>
          <div id="Slide3"></div>
          <div id="Slide4"></div>
          <div id="Slide5"></div>
          <div id="Slide6"></div>
        </Slider>
      </div>
    );
  }
}

export default App;
