import React, { Component } from "react";
import NumKey from "./numkey";

class NumPad extends Component {
  state = {
    // numKeys: [
    //   { id: 0, keyValue: 0 },
    //   { id: 1, keyValue: 1 },
    //   { id: 2, keyValue: 2 },
    //   { id: 3, keyValue: 3 },
    //   { id: 4, keyValue: 4 },
    //   { id: 5, keyValue: 5 },
    //   { id: 6, keyValue: 6 },
    //   { id: 7, keyValue: 7 },
    //   { id: 8, keyValue: 8 },
    //   { id: 9, keyValue: 9 }
    // ],
    inputValue: ""
  };

  numkeyOnClickHandler = numkey => {
    var inputValue = "";
    if (numkey < 10) {
      inputValue = this.state.inputValue + numkey;
    }

    this.setState({ inputValue });
  };

  render() {
    return (
      <div>
        <div>
          <span>
            <b>Svar:</b> {this.state.inputValue}
          </span>
        </div>
        <div>
          <NumKey key={1} keyvalue={1} onClick={this.numkeyOnClickHandler} />
          <NumKey key={2} keyvalue={2} onClick={this.numkeyOnClickHandler} />
          <NumKey key={3} keyvalue={3} onClick={this.numkeyOnClickHandler} />
          <NumKey
            key={98}
            keyvalue={"Clear"}
            onClick={this.numkeyOnClickHandler}
          />
        </div>

        <div>
          <NumKey key={4} keyvalue={4} onClick={this.numkeyOnClickHandler} />
          <NumKey key={5} keyvalue={5} onClick={this.numkeyOnClickHandler} />
          <NumKey key={6} keyvalue={6} onClick={this.numkeyOnClickHandler} />
          <NumKey
            key={99}
            keyvalue={"OK"}
            onClick={this.numkeyOnClickHandler}
          />
        </div>

        <div>
          <NumKey key={7} keyvalue={7} onClick={this.numkeyOnClickHandler} />
          <NumKey key={8} keyvalue={8} onClick={this.numkeyOnClickHandler} />
          <NumKey key={9} keyvalue={9} onClick={this.numkeyOnClickHandler} />
        </div>

        <div>
          <NumKey key={0} keyvalue={0} onClick={this.numkeyOnClickHandler} />
        </div>

        {/* {this.state.numKeys.map(numkey => (
          <NumKey
            key={numkey.id}
            keyvalue={numkey.keyValue}
            onClick={this.numkeyOnClickHandler}
          />
        ))} */}
      </div>
    );
  }
}

export default NumPad;
