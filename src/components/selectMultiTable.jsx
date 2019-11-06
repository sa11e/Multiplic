import React, { Component } from "react";
import NumKey from "./numkey";

class SelectMultiTable extends Component {
  state = {};

  renderButtons() {
    var multiplicationTables = [2, 3, 4, 5, 6, 7, 8, 9, 10];

    var multiButtons = [];
    multiplicationTables.forEach(element => {
      multiButtons.push(
        <NumKey
          key={element}
          keyvalue={element}
          onClick={() => this.props.updateSelectedMultiTable(element)}
        />
      );
    });

    return multiButtons;
  }

  render() {
    return this.renderButtons();
  }
}

export default SelectMultiTable;
