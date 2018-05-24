import React, { Component } from 'react';
import logo from './app_resources/health.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Health Care</h1>
        </header>
       <p>This website all about health care.</p>
      </div>
    );
  }
}

export default App;
