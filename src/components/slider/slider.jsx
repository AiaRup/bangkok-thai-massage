import React, { Component } from 'react';
import Slide from './slide';
import { LeftArrow, RightArrow } from './arrows';

import './slider.css';

import image1 from '../../images/gallery/img11.jpg';
import image2 from '../../images/gallery/img7.jpg';
import image3 from '../../images/gallery/img10.jpg';
import image4 from '../../images/gallery/img9.jpg';
import image5 from '../../images/gallery/img6.jpg';
import image6 from '../../images/gallery/img3.jpg';
import image7 from '../../images/gallery/img2.jpg';
import image8 from '../../images/gallery/img4.jpg';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        { left: image2, right: image1 },
        { left: image3, right: image4 },
        { left: image5, right: image6 },
        { left: image7, right: image8 }
      ]
    };
  }

  goToPrevSlide = () => {
    let last = this.state.images.slice(-1);
    let rest = this.state.images.slice(0, -1);
    let images = [...last, ...rest];
    this.setState({ images });
  };

  goToNextSlide = () => {
    let [first, ...rest] = this.state.images;
    let images = [...rest, first];
    this.setState({ images });
  };

  render() {
    const { images } = this.state;

    const styles = {
      backgroundImage: `url(${images[0].left})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    };

    return (
      <div className="header-bg">
        <div className="slide__bg" style={styles} />
        <div className="slider">
          <div className="slider-wrapper">
            {images.map((image, i) => (
              <Slide key={i} imageLeft={image.left} imageRight={image.right} />
            ))}
          </div>

          <LeftArrow goToPrevSlide={this.goToPrevSlide} />
          <RightArrow goToNextSlide={this.goToNextSlide} />
        </div>
      </div>
    );
  }
}
