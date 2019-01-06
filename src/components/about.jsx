import React, { Component } from 'react';
import BackgroudLogo from '../images/logo-bm.jpg';
import Navbar from './navbar';
import Footer from './footer';

const styles = {
  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('${BackgroudLogo}')`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat, no-repeat',
  backgroundPosition: 'center, right 30% bottom 45%'
};

class About extends Component {
  render() {
    return (
      <section className="content-about">
        <header className="header" style={styles}>
          <Navbar transperant />
        </header>
        <content>
          <div className="data-about">
            <div className="container py-3">
              <h1 className="section-header english line-on-sides">
                About Us | <span>אודותינו</span>
              </h1>
              <div dir="rtl">
                בנגקוק תאי מסאז' הינו המקום המושלם להירגע ולהתפנק.
                <br />
                צוות המעסים שלנו מורכב כולו מתאילנדים מקצועיים, שהוסמכו בתאילנד
                ועבדו שם ובישראל שנים רבות.
                <br />
                אתם מוזמנים להגיע ולהנות מהניסיון העשיר שלהם ולחוות עיסוי יוצא
                דופן באיכותו.
                <br />
                הטיפולים המקצועיים שלנו כוללים:
                <div className="row py-3">
                  <div className="col-lg-6">
                    <p>עיסוי תאילנדי מסורתי</p>
                    <p>עיסוי שמנים</p>
                    <p>עיסוי משולב</p>
                  </div>
                  <div className="col-lg-6">
                    <p>עיסוי כפות רגליים</p>
                    <p>עיסוי גב | צוואר | כתפיים</p>
                    <p>עיסוי אבנים חמות וצמחי מרפא</p>
                  </div>
                </div>
                <br />
                אז למה אתם מחכים? התקשרו עכשיו!
                <a className="tel-number" href="tel:+9723-7448862">
                  03-7448862
                </a>
              </div>
            </div>
          </div>
        </content>
        <Footer />
      </section>
    );
  }
}

export default About;
