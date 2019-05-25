import React, { Component } from "react";
class Image extends Component {
  state = {};
  render() {
    return (
      // <img src={ require('./images/image1.jpg') } />
      <div
        style={{
          display: this.props.imageShouldHide ? "none" : "block"
        }}
      >
        <img
          // className={this.props.imageShouldHide ? "hidden" : ""}
          src={this.props.imageFullPath}
        />
      </div>
    );
  }
}

export default Image;
