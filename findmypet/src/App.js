import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar';
import Feed from './components/Feed'
import Report from './components/Report'
import Header from './components/Header'
import { Router } from '@reach/router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <LandingPage path='landing'/>
          <Feed path='feed' />
          <Report path='reportes/:reportid' />
        </Router>
          <Navbar/>
      </div>
    );
  }
}

export default App;
