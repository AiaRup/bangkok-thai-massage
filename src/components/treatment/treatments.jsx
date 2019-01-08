import React from 'react';
import Treatment from './treatment';
import { treatments } from '../../utils/treatmentsData';
import './treatment.css';

const Treatments = () => {
  return (
    <section id="treatments">
      <div className="container px-3">
        <div className="line-on-sides section-header ">
          <h1 className="english">
            Our Treatments <br />
            <span className="he"> הטיפולים שלנו</span>
          </h1>
        </div>
        {/* <div className="section-header line-on-sides">
          <h1>הטיפולים שלנו</h1>
          <h1 className="english">Our Treatments</h1>
        </div> */}
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
