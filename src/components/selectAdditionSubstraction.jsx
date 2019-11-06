import React, { Component } from "react";
import NumKey from "./numkey";

class SelectAdditionSubstraction extends Component {
  state = {};

  renderButtons() {
    var buttons = [];
    buttons.push(
      <NumKey
        keyvalue={"Addition 1-10"}
        key={110}
        onClick={() => this.props.updateSelectedMultiTable(110)}
      />
    );

    buttons.push(
      <NumKey
        keyvalue={"Addition 1-100"}
        key={111}
        onClick={() => this.props.updateSelectedMultiTable(111)}
      />
    );

    buttons.push(
      <NumKey
        keyvalue={"Subtraktion 1-10"}
        key={112}
        onClick={() => this.props.updateSelectedMultiTable(112)}
      />
    );

    buttons.push(
      <NumKey
        keyvalue={"Subtraktion 1-100"}
        key={113}
        onClick={() => this.props.updateSelectedMultiTable(113)}
      />
    );

    return buttons;
  }

  render() {
    return this.renderButtons();
  }
}

export default SelectAdditionSubstraction;
