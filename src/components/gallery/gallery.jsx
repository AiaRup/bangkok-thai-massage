import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import background from '../../images/header-image.jpg';
import staff from '../../images/staff-image.jpg';
import bed from '../../images/bed-image.jpg';
import Navbar from '../navbar/navbar';
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
      <Navbar transperant={false} />
      <div className="container">
        <UncontrolledCarousel items={items} />
      </div>
      <Footer />
    </section>
  );
};

export default Gallery;
