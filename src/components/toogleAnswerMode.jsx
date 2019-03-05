import React, { Component } from "react";

class ToogleAnswerMode extends Component {
  state = {};

  render() {
    return (
      <div
        onChange={event => this.props.onAnswerModeChanged(event.target.value)}
      >
        <input
          type="radio"
          value="numpad"
          name="toogleAnswerMode"
          defaultChecked={!this.props.choooseAnswerChecked}
        />{" "}
        1-9
        <input
          type="radio"
          value="choose_answer"
          name="toogleAnswerMode"
          defaultChecked={this.props.choooseAnswerChecked}
        />{" "}
        Välj rätt svar
      </div>
    );
  }
}

export default ToogleAnswerMode;
