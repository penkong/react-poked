import './Coin.css'
import React, { Component } from 'react';

class Coin extends Component {
  render() {
    const {info} = this.props;
    return (
      <div className="Coin">
        <img src={info.urlSrc} alt={info.side}/>        
      </div>
    );
  }
}

export default Coin;