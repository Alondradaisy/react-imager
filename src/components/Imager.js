import React, { Component } from "react";
import Display from "./Display";
import Thumbnails from "./Thumbnails";

export class Imager extends Component {
  state = {
    images: [
      "images/1.png",
      "images/2.png",
      "images/3.png",
      "images/4.png",
      "images/5.png",
      "images/6.png",
      "images/7.png",
      "images/8.png",
      "images/9.png",
      "images/10.png",
      "images/11.png",
      "images/12.png",
    ],
    bigImage: "",
    indexImage: "",
  };

  componentDidMount() {
    let randomNum = Math.floor(Math.random() * this.state.images.length);

    this.setState({
      bigImage: this.state.images[randomNum],
      indexImage: randomNum,
    });
  }

  randomImageGenerator = () => {
    let randomNum = Math.floor(Math.random() * this.state.images.length);

    this.setState({
      bigImage: this.state.images[randomNum],
    });
  };

  backButton = () => {
    if (this.state.indexImage === 0) {
      this.setState({
        bigImage: this.state.images[this.state.images.length - 1],
        indexImage: this.state.images.length - 1,
      });
    } else {
      this.setState({
        bigImage: this.state.images[this.state.indexImage - 1],
        indexImage: this.state.indexImage - 1,
      });
    }
  };

  forwardButton = () => {
    console.log(this.state.indexImage);

    if (this.state.indexImage === 11) {
      this.setState({
        bigImage: this.state.images[0],
        indexImage: 0,
      });
    } else {
      this.setState({
        bigImage: this.state.images[this.state.indexImage + 1],
        indexImage: this.state.indexImage + 1,
      });
    }
  };

  thumbnailsSelect = (item, index) => {
    console.log(item);
    this.setState({
      bigImage: item,
      indexImage: index,
    });
  };

  render() {
    return (
      <div>
        <Display
          bigImage={this.state.bigImage}
          randomImageGenerator={this.randomImageGenerator}
        />
        <button onClick={this.backButton}> {"<"} </button>
        <button onClick={this.forwardButton}> {">"} </button>
        <Thumbnails
          images={this.state.images}
          thumbnailsSelect={this.thumbnailsSelect}
        />
      </div>
    );
  }
}

export default Imager;
