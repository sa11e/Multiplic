import React, { Component } from "react";
import NumKey from "./numkey";

class SelectAnswerButtons extends Component {
  state = {};
  render() {
    return (
      <div>
        <NumKey
          key={this.props.choices[0]}
          keyvalue={this.props.choices[0]}
          onClick={() => this.props.answerbuttonClicked(this.props.choices[0])}
        />
        <NumKey
          key={this.props.choices[1]}
          keyvalue={this.props.choices[1]}
          onClick={() => this.props.answerbuttonClicked(this.props.choices[1])}
        />
        <NumKey
          key={this.props.choices[2]}
          keyvalue={this.props.choices[2]}
          onClick={() => this.props.answerbuttonClicked(this.props.choices[2])}
        />
      </div>
    );
  }
}

export default SelectAnswerButtons;
