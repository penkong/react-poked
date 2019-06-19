import React, { Component } from 'react';

class CoinContainer extends Component {
  state = {currCoin: null, nFlips: 0, nHeads: 0, nTails: 0 };
  static defaultProps = {
    coins: [
      {side: 'heads', urlSrc: "https://tinyurl.com/react-coin-heads-jpg"},
      {side: 'tails', urlSrc: "https://tinyurl.com/react-coin-tails-jpg"}
    ]
  }
  render() {
    return (
      <div className="CoinContainer">
        <h2>LEts flip a coin</h2>
        <p>out of {this.state.nFlips} flips, 
          there you have been {this.state.nHeads} heads
          and {this.state.nTails} tails
        </p>
      </div>
    );
  }
}

export default CoinContainer;