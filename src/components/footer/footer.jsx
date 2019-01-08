import React from 'react';
import Map from '../contact/map';
import './footer.css';

const createWidgwt = (d, s, id) => {
  let js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src =
    'https://widgets.moovit.com/ws/7EDFF83D3FC1BB10E0530100007FE537/2185310';
  fjs.parentNode.insertBefore(js, fjs);
};

const Footer = () => {
  createWidgwt(document, 'script', 'moovit-jsw');
  return (
    <footer className="about-footer">
      <div className="row py-3">
        <div className="col-lg">
          <h3>צרו קשר</h3>
          <hr className="style-hr" />
          <p>
            <i className="fa fa-phone mr-3" aria-hidden="true" />
            03-7448862
          </p>
          <p>
            <i className="fa fa-envelope mr-3" aria-hidden="true" />
            bangkokthaimassage61@gmail.com
          </p>
          <div className="row mb-3 justify-content-center">
            <p className="footer-icon">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/place/Bangkok+thai+massage/@32.077166,34.772915,15z/data=!4m5!3m4!1s0x0:0xac58e48718ca52c!8m2!3d32.077166!4d34.772915">
                <i className="fa fa-google" aria-hidden="true" />
              </a>
            </p>
            <p className="footer-icon">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/BangkokThaiMassageTLV/">
                <i className="fa fa-facebook" />
              </a>
            </p>
            <p className="footer-icon">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/bangkok_thai_massage/">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>
        <div className="col-lg">
          <h3>בקרו אותנו</h3>
          <hr className="style-hr" />
          <p>
            <i className="fa fa-map-marker mr-3" aria-hidden="true" />
            פינסקר 61, תל אביב
          </p>
          <p>61 Pinsker St. Tel-Aviv</p>
        </div>
      </div>
      <div className="row py-3 justify-content-center">
        <div className="col-md px-lg-5 p-3">
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&language=en,he&key=AIzaSyCl5mAkzOiDZ8dnZjdankkW92-MYxmjNw0"
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '320px' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>
        <div className="col-md px-lg-5 p-3">
          <div
            className="mv-gd-widget-20"
            data-width="100%"
            data-height="100%"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
