import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import background from '../images/header-image.jpg';
import staff from '../images/staff-image.jpg';
import bed from '../images/bed-image.jpg';
import Map from './map';

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

class About extends Component {
  render() {
    return (
      <div className="container">
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&language=en&key=AIzaSyCl5mAkzOiDZ8dnZjdankkW92-MYxmjNw0"
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
        <UncontrolledCarousel items={items} />
      </div>
    );
  }
}

export default About;
