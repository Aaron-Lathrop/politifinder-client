import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Nav from './components/Primary/nav';
import LandingPage from './components/LandingPage/landing-page';
import Footer from './components/Primary/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Redirect from='/:unknown' to='/' />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
