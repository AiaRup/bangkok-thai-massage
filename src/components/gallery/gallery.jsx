import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import images from '../../utils/images';
import Footer from '../footer/footer';
import { Roll, Fade } from 'react-reveal';
// import Fade from 'react-reveal/Fade';

import './gallery.css';

const Gallery = () => {
  return (
    <section id="gallery">
      <Fade bottom>
        <div className="line-on-sides section-header ">
          <h1 className="english">
            Gallery <br />
            <span className="he"> גלריה</span>
          </h1>
        </div>
      </Fade>
      <div className="image-container">
        {images.map((img, index) => (
          <Roll left key={index}>
            <div className="image-box">
              <div className="img-wrapper">
                <img src={img.src} alt="" />
              </div>
              <div className="img-details">
                <div className="img-content">
                  <p>{img.header}</p>
                </div>
              </div>
            </div>
          </Roll>
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
