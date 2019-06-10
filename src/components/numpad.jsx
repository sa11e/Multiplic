import React, { Component } from "react";
import NumKey from "./numkey";

class NumPad extends Component {
  state = {};

  render() {
    return (
      <div>
        <div>
          <NumKey
            key={1}
            keyvalue={1}
            onClick={() => this.props.numkeyClicked(1)}
          />
          <NumKey
            key={2}
            keyvalue={2}
            onClick={() => this.props.numkeyClicked(2)}
          />
          <NumKey
            key={3}
            keyvalue={3}
            onClick={() => this.props.numkeyClicked(3)}
          />
          <NumKey
            key={98}
            keyvalue={"Clear"}
            onClick={() => this.props.clearClicked()}
          />
        </div>

        <div>
          <NumKey
            key={4}
            keyvalue={4}
            onClick={() => this.props.numkeyClicked(4)}
          />
          <NumKey
            key={5}
            keyvalue={5}
            onClick={() => this.props.numkeyClicked(5)}
          />
          <NumKey
            key={6}
            keyvalue={6}
            onClick={() => this.props.numkeyClicked(6)}
          />
          <NumKey
            key={99}
            keyvalue={"OK"}
            onClick={() => this.props.okClicked(this.props.answerField)}
          />
        </div>

        <div>
          <NumKey
            key={7}
            keyvalue={7}
            onClick={() => this.props.numkeyClicked(7)}
          />
          <NumKey
            key={8}
            keyvalue={8}
            onClick={() => this.props.numkeyClicked(8)}
          />
          <NumKey
            key={9}
            keyvalue={9}
            onClick={() => this.props.numkeyClicked(9)}
          />
        </div>

        <div>
          <NumKey
            key={0}
            keyvalue={0}
            onClick={() => this.props.numkeyClicked(0)}
          />
        </div>
      </div>
    );
  }
}

export default NumPad;
