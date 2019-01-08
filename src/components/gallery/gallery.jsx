import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import background from '../../images/header-image.jpg';
import staff from '../../images/staff-image.jpg';
import bed from '../../images/bed-image.jpg';
import Footer from '../footer/footer';
import './gallery.css';

const items = [
  {
    src: background,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: staff,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: bed,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="line-on-sides section-header ">
        <h1 className="english">
          Gallery <br />
          <span className="he"> גלריה</span>
        </h1>
      </div>
      <div className="image-container">
        <div className="image-box">
          <div className="img-wrapper">
            <img src={items[0].src} alt="" />
          </div>
          <div className="img-details">
            <div className="img-content">
              <p>{items[0].header}</p>
            </div>
          </div>
        </div>

        <div className="image-box" />
        <div className="image-box" />
        <div className="image-box" />
        <div className="image-box" />
        <div className="image-box" />
        <div className="image-box" />
        <div className="image-box" />
      </div>
      {/* <div className="container pb-5">
        <UncontrolledCarousel items={items} />
      </div> */}
      <Footer />
    </section>
  );
};

export default Gallery;
