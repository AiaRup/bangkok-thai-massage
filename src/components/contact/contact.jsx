import React from 'react';
import Map from './map';
import Fade from 'react-reveal/Fade';

import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <Fade bottom>
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-6 contact-data">
              <div className="line-on-sides section-header">
                <h1 className="english">
                  Contact <br />
                  <span className="he"> צרו קשר</span>
                </h1>
              </div>
              {/*  section-header  */}
              <p>
                <a href="tel:+9723-7448862" className="contact-link">
                  03-7448862
                </a>
                <i className="fa fa-phone ml-3" aria-hidden="true" />
              </p>
              <p>
                <a
                  href="mailto:bangkokthaimassage61@gmail.com"
                  className="contact-link">
                  bangkokthaimassage61@gmail.com
                </a>
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
              {/*  row icons  */}
              <p>
                פינסקר 61, תל אביב
                <i className="fa fa-map-marker ml-3" aria-hidden="true" />
              </p>
              <p>61 Pinsker St. Tel-Aviv</p>
            </div>
            {/*  col-lg-6 contact-data  */}
            <div className="col-lg-12 ">
              <h3 className="opening-hours english" dir="rtl">
                <i className="fa fa-clock-o ml-3" aria-hidden="true" />
                <span>Opening Hours</span>
                <span className="h3-seperator"> |</span>
                <span className="he">שעות פעילות</span>
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
                {/*  col-md-2 */}
              </div>
              {/*  row inside opening hours  */}
            </div>
            {/*  col-lg-12 opening-hours  */}
            <div className="col-lg-6 px-lg-0 py-3 py-lg-0 order-lg-first">
              <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&language=en,he&key=AIzaSyCl5mAkzOiDZ8dnZjdankkW92-MYxmjNw0"
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '485px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
              />
            </div>
            {/*  col-lg-6 map  */}
          </div>
          {/*  row  */}
        </div>
        {/*  container-fluid  */}
      </Fade>
    </section>
  );
};

export default Contact;
