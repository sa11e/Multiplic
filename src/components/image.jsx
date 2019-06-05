import React, { Component } from "react";
class Image extends Component {
  state = {};

  getRandomText = () => {
    // Get all images in the images folder
    var texts = [
      "Snygg bild!",
      "Vilket leende!",
      "Kamma dig",
      "När var du hos frisören senast?"
    ];
    // Get random number between 0 and number of images
    var randomIndex = Math.floor(Math.random() * texts.length);
    var randomText = texts[randomIndex];
    return randomText;
  };

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
        <div>
          <label>{this.getRandomText()}</label>
        </div>
      </div>
    );
  }
}

export default Image;
