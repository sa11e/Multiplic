import React, { Component } from "react";
import ToogleAnswerMode from "./toogleAnswerMode";
import SelectMultiTable from "./selectMultiTable";

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
        <div
          style={{ display: this.props.settingsShouldHide ? "none" : "block" }}
        >
          <ToogleAnswerMode
            onAnswerModeChanged={this.props.onAnswerModeChanged}
            choooseAnswerChecked={this.state.answerMode != "numpad"}
          />
          <SelectMultiTable
            updateSelectedMultiTable={newTable =>
              this.props.updateSelectedMultiTable(newTable)
            }
          />
        </div>
      </div>
    );
  }
}

export default SettingsPanel;
