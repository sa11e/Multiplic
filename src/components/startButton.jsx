import React, { Component } from "react";
class StartButton extends Component {
  state = {};
  render() {
    return (
      <div>
        <button
          className="btn btn-secondary btn-l m-2"
          onClick={this.props.onClick}
        >
          {this.props.buttonText}
        </button>
        <span>{"Tid: " + this.props.timerText}</span>
      </div>
    );
  }
}

export default StartButton;
