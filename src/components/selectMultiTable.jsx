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

    return (
      <div>
        Välj multiplikationstabell:
        <NumKey
          key={2}
          keyvalue={2}
          onClick={() => this.props.updateSelectedMultiTable(2)}
        />
        <NumKey
          key={3}
          keyvalue={3}
          onClick={() => this.props.updateSelectedMultiTable(3)}
        />
        <NumKey
          key={5}
          keyvalue={5}
          onClick={() => this.props.updateSelectedMultiTable(5)}
        />
        <NumKey
          key={10}
          keyvalue={10}
          onClick={() => this.props.updateSelectedMultiTable(10)}
        />
      </div>
    );
  }
}

export default SelectMultiTable;
