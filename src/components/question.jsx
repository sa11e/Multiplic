import React, { Component } from "react";

class Question extends Component {
  state = {};
  render() {
    return (
      <div>
        <span>{this.props.questionText}</span>
      </div>
    );
  }
}

export default Question;
