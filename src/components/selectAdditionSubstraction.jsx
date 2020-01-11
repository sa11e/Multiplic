import React, { Component } from "react";
import NumKey from "./numkey";
import { ArithmeticChoice } from "../constants.js";

class SelectAdditionSubstraction extends Component {
  state = {};

  renderButtons() {
    var buttons = [];
    buttons.push(
      <NumKey
        keyvalue={"Addition 1-10"}
        key={110}
        onClick={() => this.props.updateSelectedMultiTable(ArithmeticChoice.Addition1To10)}
      />
    );

    buttons.push(
      <NumKey
        keyvalue={"Addition 1-100"}
        key={111}
        onClick={() => this.props.updateSelectedMultiTable(ArithmeticChoice.Addition1To100)}
      />
    );

    buttons.push(
      <NumKey
        keyvalue={"Subtraktion 1-10"}
        key={112}
        onClick={() => this.props.updateSelectedMultiTable(ArithmeticChoice.Subtraction1To10)}
      />
    );

    buttons.push(
      <NumKey
        keyvalue={"Subtraktion 1-100"}
        key={113}
        onClick={() => this.props.updateSelectedMultiTable(ArithmeticChoice.Subtraction1To100)}
      />
    );

    return buttons;
  }

  render() {
    return this.renderButtons();
  }
}

export default SelectAdditionSubstraction;
