import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'
import HomePage from './components/homePage/HomePage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <br/>
        <HomePage />
      </div>
    );
  }
}

export default App;
