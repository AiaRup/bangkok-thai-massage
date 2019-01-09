import React from 'react';
// import BackgroudLogo from '../../images/logo-bm.jpg';
import Footer from '../footer/footer';
import Fade from 'react-reveal/Fade';

import BackgroundSlideshow from 'react-background-slideshow';
import './about.css';

import image1 from '../../images/homeBackground/back1.jpg';
import image2 from '../../images/homeBackground/back2.jpg';
import image3 from '../../images/homeBackground/back3.jpg';
import image4 from '../../images/homeBackground/back4.jpg';
import image5 from '../../images/homeBackground/back5.jpg';
import image6 from '../../images/homeBackground/staff-resize.jpg';
import image7 from '../../images/homeBackground/back7.jpg';

// const styles = {
//   background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
//     url('${BackgroudLogo}')`,
//   backgroundSize: 'contain',
//   backgroundRepeat: 'no-repeat, no-repeat',
//   backgroundPosition: 'center, right 30% bottom 45%'
// };

const About = () => {
  return (
    <section className="content-about">
      <header className="header">
        <BackgroundSlideshow
          images={[image1, image2, image3, image4, image5, image6, image7]}
        />
      </header>
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
