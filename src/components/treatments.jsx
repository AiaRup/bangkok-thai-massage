import React, { Component } from 'react';
import Navbar from './navbar';
import Treatment from './treatment';
import { treatments } from '../utils/treatmentsData';

class Treatments extends Component {
  render() {
    return (
      <section id="treatments">
        <Navbar transperant={false} />

        <div className="container px-3">
          <h1 className="section-header english line-on-sides">
            Our Treatments | <span>הטיפולים שלנו</span>
          </h1>
          <div className="row">
            {treatments.map((t, index) => (
              <Treatment
                key={index}
                image={t.image}
                enName={t.enName}
                heName={t.heName}
                content={t.treatData}
                prices={t.prices}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Treatments;
