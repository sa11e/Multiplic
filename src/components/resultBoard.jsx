import React, { Component } from "react";

class ResultBoard extends Component {
  state = {};
  render() {
    return (
      <div>
        <span className="badge badge-pill badge-secondary">
          {this.props.correctAnswers} / {this.props.total}
        </span>
      </div>
    );
  }
}

export default ResultBoard;
