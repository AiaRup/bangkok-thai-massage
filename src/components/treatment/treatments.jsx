import React from 'react';
import Navbar from '../navbar/navbar';
import Treatment from './treatment';
import { treatments } from '../../utils/treatmentsData';
import './treatment.css';

const Treatments = () => {
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
};

export default Treatments;
