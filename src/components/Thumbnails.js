import React, { Component } from "react";

export class Thumbnails extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          {this.props.images.map((item, index) => {
            return (
              <img
                style={{ height: 150, width: 150 }}
                key={item}
                src={item}
                alt={item}
                onClick={() => this.props.thumbnailsSelect(item, index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Thumbnails;
