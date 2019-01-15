import React from 'react';

const Slide = ({ imageLeft, imageRight }) => {
  const styles = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  };
  return (
    <div className="slide">
      <div
        className="slide-inner inner-left"
        style={{ backgroundImage: `url(${imageLeft})`, ...styles }}
      />
      <div
        className="slide-inner inner-right"
        style={{ backgroundImage: `url(${imageRight})`, ...styles }}
      />
    </div>
  );
};

export default Slide;
