import React, { Component } from "react";

export class Display extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.bigImage}
          alt="image"
          style={{ height: 500, width: 500 }}
        />
        <button onClick={this.props.randomImageGenerator}>
          Give me a random image!
        </button>
      </div>
    );
  }
}

export default Display;
