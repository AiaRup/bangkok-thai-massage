import React from 'react';
import Footer from '../footer/footer';
import Fade from 'react-reveal/Fade';
import Slider from '../slider/slider';

import './about.css';

const About = () => {
  return (
    <section id="about">
      <Fade bottom>
        <header className="header__main">
          <h1 className="main-headline">
            <span className="english">Bangkok Thai Massage</span>
          </h1>
          <Slider />
          <h1 className="second-headline" dir="rtl">
            בואו להנות מחווית עיסוי בלתי נשכחת!
          </h1>
        </header>
      </Fade>
      <content>
        <Fade bottom>
          <div className="data-about">
            <div className="container py-3">
              <div className="line-on-sides section-header ">
                <h1 className="english">
                  About Us <br />
                  <span className="he"> אודותינו</span>
                </h1>
              </div>
              <div dir="rtl" className="about-details">
                בנגקוק תאי מסאז' הינו המקום המושלם להירגע ולהתפנק.
                <br />
                צוות המעסים שלנו מורכב כולו מתאילנדים מקצועיים, שהוסמכו בתאילנד
                ועבדו שם ובישראל שנים רבות.
                <br />
                אתם מוזמנים להגיע ולהנות מהניסיון העשיר שלהם ולחוות עיסוי יוצא
                דופן באיכותו.
                <br />
                הטיפולים המקצועיים שלנו כוללים:
                <Fade bottom>
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
                </Fade>
                <br />
                <Fade bottom>
                  אז למה אתם מחכים? התקשרו עכשיו!
                  <a className="tel-number" href="tel:+9723-7448862">
                    03-7448862
                  </a>
                </Fade>
              </div>
            </div>
          </div>
        </Fade>
      </content>
      <Footer />
    </section>
  );
};

export default About;
