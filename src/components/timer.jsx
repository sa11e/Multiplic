import React, { Component } from "react";

class Timer extends Component {
  state = {};
  render() {
    return (
      <div>
        <span>{this.props.timer}</span>
      </div>
    );
  }
}

export default Timer;
