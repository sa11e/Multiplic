import React, { PureComponent } from "react";
class Image extends Component {
  state = {};
  render() {
    return (
      // <img src={ require('./images/image1.jpg') } />
      <img
        className={this.props.shouldHide ? "hidden" : ""}
        src={this.props.imageFullPath}
      />
    );
  }
}

export default Image;
