import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar';
import Feed from './components/Feed'
import { Router } from '@reach/router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <LandingPage path='landing'/>
          <Feed path='feed' />
        </Router>
          <Navbar/>
      </div>
    );
  }
}

export default App;
