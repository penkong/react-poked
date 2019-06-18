import './App.css';
import React, { Component } from 'react';
import PokCard from './PokCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokCard
          id={4}
          name="Charmander"
          type="fire"
          exp="62"
        />
      </div>
    );
  }
}

export default App;
