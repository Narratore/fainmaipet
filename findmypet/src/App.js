import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar';
import Feed from './components/Feed'
import Report from './components/Report'
import Header from './components/Header'
import { Router, Redirect } from '@reach/router'
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import SignUp from './components/SignUp'
import Publication from './components/Publication'
import { puts } from 'util';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <NotFound default/>
          <SignUp path='signup' />
          <Profile path='profile' />
          <LandingPage path='landing'/>
          <Feed path='feed' />
          <Report path='report' />
          <Publication path='publication/:reportid'/>
        <Redirect from="/" to="feed" noThrow/>
        </Router>
          <Navbar/>
      </div>
    );
  }
}

export default App;
