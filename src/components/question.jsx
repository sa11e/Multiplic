import React, { Component } from "react";

class Question extends Component {
  state = {};
  render() {
    const style = {
      fontSize: "xx-large"
    };
    return (
      <div style={style}>
        <span className="mr-2">
          <b>Fråga:</b>
        </span>
        <span>{this.props.questionText} </span>
        <span>
          <b>{this.props.answerField}</b>
        </span>
      </div>
    );
  }
}

export default Question;
