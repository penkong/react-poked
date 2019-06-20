import React, { Component } from 'react';

class Deck extends Component {
  state = { deck: null };
  componentDidMount() {
    const url = `https://deckofcardsapi.com/api/deck/new/shuffle`;
  }
  
  render() {
    return (
      <div>
        <h1>Card dealer</h1>
      </div>
    );
  }
}

export default Deck;