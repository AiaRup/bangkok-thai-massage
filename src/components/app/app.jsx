import React from 'react';
import About from '../about/about';
import Gallery from '../gallery/gallery';
import Treatments from '../treatment/treatments';
import Contact from '../contact/contact';
import Navbar from '../navbar/navbar';
import { withRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './app.css';
import './animation.css';

const Layout = ({ children }) => (
  <React.Fragment>
    <Navbar />
    {children}
  </React.Fragment>
);

// const createWidgwt = (d, s, id) => {
//   let js,
//     fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s);
//   js.id = id;
//   js.src =
//     'https://widgets.moovit.com/ws/7EDFF83D3FC1BB10E0530100007FE537/2185310';
//   fjs.parentNode.insertBefore(js, fjs);
// };

const App = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/';
  // createWidgwt(document, 'script', 'moovit-jsw');
  // const timeout = { enter: 300, exit: 200 };

  return (
    <Layout>
      <TransitionGroup component="main" className="page-main">
        <CSSTransition
          key={currentKey}
          // timeout={timeout}
          // classNames="fade"
          // appear>
          // {...props}
          classNames="fadeTranslate"
          timeout={1000}
          mountOnEnter={true}
          unmountOnExit={true}>
          <section className="page-main-inner App">
            <Switch location={location}>
              <Route exact path="/" component={About} />
              <Route exact path="/Treatments" component={Treatments} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/Gallery" component={Gallery} />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
            <div className="copyRights">
              <span>ARupsom &copy; {new Date().getFullYear()}</span>
            </div>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
};

export default withRouter(App);
