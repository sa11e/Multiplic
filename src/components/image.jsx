import React, { Component } from "react";
class Image extends Component {
  state = {};
  render() {
    return (
      // <img src={ require('./images/image1.jpg') } />
      <img
        className={this.props.imageShouldHide ? "hidden" : ""}
        src={this.props.imageFullPath}
      />
    );
  }
}

export default Image;
