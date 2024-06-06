// componentWillUnmount
// Called right before the component is unmounted and destroyed. It's used for cleanup, such as clearing timers.

// Example:
import React, { Component } from 'react';

class Timer extends Component {
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // Update state
  }

  render() {
    return <div>Time: {this.state.time}</div>;
  }
}

export default Timer;
