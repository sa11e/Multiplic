import React, { Component } from "react";
import ToogleAnswerMode from "./toogleAnswerMode";
import SelectMultiTable from "./selectMultiTable";
import SelectAdditionSubstraction from "./selectAdditionSubstraction";

class SettingsPanel extends Component {
  state = {};
  render() {
    // const { setAnswerMode } = this.props;

    return (
      <div
        onClick={event => this.props.onSettingsPanelClicked(event.target.value)}
      >
        <span className="mr-3">
          <b>Inställningar {this.props.settingsShouldHide ? "▼" : "▲"}</b>
        </span>
        <hr />
        <div
          style={{ display: this.props.settingsShouldHide ? "none" : "block" }}
        >
          Visa nummerplatta eller bara tre knapppar:
          <ToogleAnswerMode
            onAnswerModeChanged={this.props.onAnswerModeChanged}
            choooseAnswerChecked={this.props.choooseAnswerChecked}
            // choooseAnswerChecked={this.state.answerMode != "numpad"}
          />
          <hr />
          Välj multiplikationstabell:
          <br></br>
          <SelectMultiTable
            updateSelectedMultiTable={newTable =>
              this.props.updateSelectedMultiTable(newTable)
            }
          />
          <br></br>
          Addition eller Subtraktion:
          <br></br>
          <SelectAdditionSubstraction
            updateSelectedMultiTable={newTable =>
              this.props.updateSelectedMultiTable(newTable)
            }
          />
          <hr />
        </div>
      </div>
    );
  }
}

export default SettingsPanel;
