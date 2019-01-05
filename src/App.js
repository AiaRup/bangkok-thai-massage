import React, { Component } from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Treatments from './components/treatments';
import Contact from './components/contact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/Treatments" component={Treatments} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

//TODO:  fix active navlink, fix navbar fixed, fix navbar collapse
