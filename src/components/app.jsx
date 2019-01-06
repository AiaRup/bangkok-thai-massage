import React, { Component } from 'react';
import About from './about';
import Gallery from './gallery';
import Treatments from './treatments';
import Contact from './contact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/Treatments" component={Treatments} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Gallery" component={Gallery} />
          </Switch>
          <div className="copyRights">
            <span>ARupsom &copy; 2019</span>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
