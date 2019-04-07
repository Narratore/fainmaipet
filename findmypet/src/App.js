import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
