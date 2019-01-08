import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import images from '../../utils/images';
import Footer from '../footer/footer';
import './gallery.css';

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
        {images.map((img, index) => (
          <div className="image-box" key={index}>
            <div className="img-wrapper">
              <img src={img.src} alt="" />
            </div>
            <div className="img-details">
              <div className="img-content">
                <p>{img.header}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="container pb-5">
        <UncontrolledCarousel items={items} />
      </div> */}
      <Footer />
    </section>
  );
};

export default Gallery;
