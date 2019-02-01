import React, { Component } from "react";

class NumKey extends Component {
  state = {};
  render() {
    return (
      <button
        onClick={() => this.props.onClick(this.props.keyvalue)}
        className="btn btn-secondary btn-l m-2"
      >
        {this.props.keyvalue}
      </button>
    );
  }
}

export default NumKey;
