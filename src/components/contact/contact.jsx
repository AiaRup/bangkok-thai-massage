import React from 'react';
import Map from './map';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg contact-data">
            <h1 className="section-header english line-on-sides">
              Contact | <span>צרו קשר</span>
            </h1>
            <p>
              03-7448862
              <i className="fa fa-phone ml-3" aria-hidden="true" />
            </p>
            <p>
              bangkokthaimassage61@gmail.com
              <i className="fa fa-envelope ml-3" aria-hidden="true" />
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
                  href="https://www.instagram.com/bangkok_thai_massage/">
                  <i className="fa fa-instagram" aria-hidden="true" />
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
            <p>
              פינסקר 61, תל אביב
              <i className="fa fa-map-marker ml-3" aria-hidden="true" />
            </p>
            <p>61 Pinsker St. Tel-Aviv</p>
          </div>
          <div className="col-lg px-0 order-lg-first">
            <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&language=en,he&key=AIzaSyCl5mAkzOiDZ8dnZjdankkW92-MYxmjNw0"
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '485px' }} />}
              mapElement={<div style={{ height: '100%' }} />}
            />
          </div>
        </div>
        <h3 className="opening-hours english" dir="rtl">
          <i className="fa fa-clock-o ml-3" aria-hidden="true" />
          Opening Hours | <span>שעות פעילות</span>
        </h3>
        <div className="row justify-content-md-center">
          <div className="col-md-2 order-md-last">
            <p>
              <u dir="rtl">ראשון-חמישי:</u>
            </p>
            <p> 10:00 - 21:00</p>
          </div>
          <div className="col-md-2">
            <p>
              <u dir="rtl">שישי:</u>
            </p>
            <p> 10:00 - 18:00</p>
          </div>
          <div className="col-md-2 order-md-first">
            <p>
              <u dir="rtl">שבת:</u>
            </p>
            <p> 12:00 - 20:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
