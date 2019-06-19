import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from './Coin';

class CoinContainer extends Component {
  state = {currCoin: null, nFlips: 0, nHeads: 0, nTails: 0 };
  static defaultProps = {
    coins: [
      {side: 'heads', urlSrc: "https://tinyurl.com/react-coin-heads-jpg"},
      {side: 'tails', urlSrc: "https://tinyurl.com/react-coin-tails-jpg"}
    ]
  }
  flipCoin = () => {
    const newCoin = choice(this.props.coins);
    this.setState( oldState => {
      return {
        currCoin: newCoin,
        nFlips: oldState.nFlips + 1,
        nHeads: oldState.nHeads + (newCoin.side === 'heads' ? 1 : 0),
        nTails: oldState.nTails + (newCoin.side === 'tails' ? 1 : 0)
      }
    })
  }
  handleClick = e => {
    this.flipCoin();
  }
  render() {
    const {currCoin, nFlips, nHeads, nTails} = this.state;
    return (
      <div className="CoinContainer">
        <h2>Lets flip a coin</h2>
        <button onClick={this.handleClick}>flip !!!</button>
        {this.state.currCoin && <Coin info={currCoin}/>}
        <p>
          out of {nFlips} flips, 
          there you have been {nHeads} heads
          and {nTails} tails
        </p>
      </div>
    );
  }
}

export default CoinContainer;