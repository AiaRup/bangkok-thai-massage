import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import background from '../images/header-image.jpg';
import staff from '../images/staff-image.jpg';
import bed from '../images/bed-image.jpg';

// const styles = {
//   backgroundImage: `url(${Background})`,
//   backgroundRepeat: 'no-repeat',
//   backgroundColor: '#cccccc',
//   height: '500px',
//   backgroundPosition: 'center',
//   backgroundSize: 'cover'
// };

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
    // return <section id="about" style={styles} />;
    return (
      <div className="container mt-3">
        <UncontrolledCarousel items={items} />
      </div>
    );
  }
}

export default About;
