import React from 'react';
import About from '../about/about';
import Gallery from '../gallery/gallery';
import Treatments from '../treatment/treatments';
import Contact from '../contact/contact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router';
import './app.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
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
      </div>
    </Router>
  );
};

export default App;
