import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar';
import Feed from './components/Feed'
import Report from './components/Report'
import Header from './components/Header'
import { Router, Redirect } from '@reach/router'
import NotFound from './components/NotFound';
import getLocation from './components/getLocation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <getLocation />
        <Header/>
        <Router>
          <NotFound default/>
          <LandingPage path='landing'/>
          <Feed path='feed' />
          <Report path='reportes/:reportid' />
        <Redirect from="/" to="feed" noThrow/>
        </Router>
          <Navbar/>
      </div>
    );
  }
}

export default App;
