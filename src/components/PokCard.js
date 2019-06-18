import React, { Component } from 'react';
import './PokCard.css';


const POK_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
class PokCard extends Component {
  render() {
    const {name , id, type, exp} = this.props
    let imgSrc = `${POK_API}${id}.png` 

    return (
      <div className="PokCard">
        <h1 className="PokCard-title">{name}</h1>
        <img src={imgSrc} alt={name}/>
        <div className="PokCard-data">Type: {type}</div>
        <div className="PokCard-data">exp: {exp}</div>
      </div>
    );
  }
}

export default PokCard;