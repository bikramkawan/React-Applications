import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        Hello World from React !!!
        </p>
         <Home/>
      </div>
    );
  }
}

export default App;
