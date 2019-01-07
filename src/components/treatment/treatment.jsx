import React from 'react';
import Price from './price';

const Treatment = ({ enName, prices, content, heName, image }) => {
  return (
    <div className="row mb-4">
      <div className="col-lg-4 align-self-center">
        <Price prices={prices} enName={enName} />
      </div>

      <div className="col-lg-4 align-self-center">{content}</div>
      <div className="col-lg-4 align-self-center">
        <h2 className="treatment-name english">{enName}</h2>
        <h3 className="treatment-name">{heName}</h3>
        <img src={image} alt={enName} className="treatment-image my-3" />
      </div>
    </div>
  );
};

export default Treatment;
