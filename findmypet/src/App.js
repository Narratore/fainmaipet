import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage/>
        <Navbar/>
      </div>
    );
  }
}

export default App;
