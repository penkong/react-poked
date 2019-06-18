import './App.css';
import React, { Component } from 'react';
import Dicc from './Dicc';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dicc face="five"/>
        <Dicc face="six"/>
      </div>
    );
  }
}

export default App;
