import React, { Component } from "react";

class ResultBoard extends Component {
  state = {};
  render() {
    return (
      <div className="well">
        <span className="badge badge-pill badge-secondary mr-2">
          {this.props.correctAnswers} / {this.props.total}
        </span>
        <span className={"badge " + this.props.resultTextClasses}>
          {this.props.resultText}
        </span>
      </div>
    );
  }
}

export default ResultBoard;
