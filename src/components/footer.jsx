import React, { Component } from 'react';
import Map from './map';

class Footer extends Component {
  render() {
    return (
      <footer className="about-footer">
        <div className="row py-3">
          <div className="col-lg-6">
            <h3>צרו קשר</h3>
            <hr className="style-hr" />
            <p>
              <i className="fa fa-phone mr-3" aria-hidden="true" />
              03-7448862
            </p>
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
          </div>
          <div className="col-lg-6">
            <h3>בקרו אותנו</h3>
            <hr className="style-hr" />
            <p>
              <i className="fa fa-map-marker mr-3" aria-hidden="true" />
              פינסקר 61, תל אביב
            </p>
            <p>61 Pinsker St. Tel-Aviv</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&language=en,he&key=AIzaSyCl5mAkzOiDZ8dnZjdankkW92-MYxmjNw0"
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '250px' }} />}
              mapElement={<div style={{ height: '100%' }} />}
            />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
