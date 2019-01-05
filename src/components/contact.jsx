import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="container-fluid py-3">
        <h1 className="section-header english line-on-sides">
          Contact | <span>צרו קשר</span>
        </h1>
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-3">
                <i
                  className="fa fa-map-marker contact-icon"
                  aria-hidden="true"
                />
                <h2 className="contact-heading" dir="rtl">
                  כתובת:
                </h2>
                <p className="contact-data" dir="rtl">
                  פינסקר 61, תל אביב (דקה הליכה מכיכר דיזינגוף)
                </p>
                <p className="contact-data english">
                  61 Pinsker St. Tel-Aviv (1 min walk from Dizengoff square)
                </p>
              </div>
              <div className="col-lg-3">
                <i className="fa fa-phone contact-icon" aria-hidden="true" />
                <h2 className="contact-heading" dir="rtl">
                  טלפון:
                </h2>
                <p className="contact-data">03-7448862</p>
              </div>
              <div className="col-lg-3">
                <i className="fa fa-clock-o contact-icon" aria-hidden="true" />
                <h2 className="contact-heading" dir="rtl">
                  שעות פעילות:
                </h2>
                <p className="contact-data">
                  <u dir="rtl">ראשון-חמישי:</u>
                </p>
                <p className="contact-data"> 10:00 - 21:00</p>
                <p className="contact-data">
                  <u dir="rtl">שישי:</u>
                </p>
                <p className="contact-data"> 10:00 - 19:00</p>
                <p className="contact-data">
                  <u dir="rtl">שבת:</u>
                </p>
                <p className="contact-data"> 12:00 - 21:00</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4" />
        </div>
      </section>
    );
  }
}

export default Contact;
