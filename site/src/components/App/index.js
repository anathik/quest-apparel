import React, { Component } from "react";
import "./index.css";

import { Carousel, Slide } from "../Carousel";
import Header from "../Header";

class App extends Component {
  constructor() {
    super();

    this.carouselInterval = null;

    this.state = {
      visibleSlideIndex: 0
    };
  }

  componentDidMount() {
    this.scheduleIntervalTimeout();
  }

  onIntervalTimeout() {
    this.setState({
      visibleSlideIndex: this.state.visibleSlideIndex + 1
    });
    console.log("Interval was called");
    this.scheduleIntervalTimeout();
  }

  scheduleIntervalTimeout() {
    this.carouselInterval = setTimeout(this.onIntervalTimeout.bind(this), 5000);
  }

  clickPrevious() {
    clearTimeout(this.carouselInterval);
    this.setState(
      {
        visibleSlideIndex: this.state.visibleSlideIndex - 1
      },
      () => {
        this.scheduleIntervalTimeout();
      }
    );
  }

  clickNext() {
    clearTimeout(this.carouselInterval);
    this.setState(
      {
        visibleSlideIndex: this.state.visibleSlideIndex + 1
      },
      () => {
        this.scheduleIntervalTimeout();
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Carousel
          visibleSlideIndex={this.state.visibleSlideIndex}
          onNextRequested={this.clickNext.bind(this)}
          onPreviousRequested={this.clickPrevious.bind(this)}
        >
          <Slide color="red" text="hello" />
          <Slide color="blue" text="my name" />
          <Slide color="green" text="is jeff" />
          <Slide color="pink" text="notice me" />
        </Carousel>
      </div>
    );
  }
}

export default App;
