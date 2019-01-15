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

const App = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/';

  return (
    <Layout>
      <TransitionGroup component="main" className="page-main">
        <CSSTransition
          key={currentKey}
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
