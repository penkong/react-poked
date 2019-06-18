import React, { Component } from 'react';
import './PokCard.css';


// const POK_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POK_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = number => (number <= 999 ? `00${number}`.slice(-3): number);
class PokCard extends Component {
  render() {
    const {name , id, type, exp} = this.props
    let imgSrc = `${POK_API}${padToThree(id)}.png` 

    return (
      <div className="PokCard">
        <h1 className="PokCard-title">{name}</h1>
        <div className="PokCard-image">
          <img src={imgSrc} alt={name}/>
        </div>
        <div className="PokCard-data">Type: {type}</div>
        <div className="PokCard-data">exp: {exp}</div>
      </div>
    );
  }
}

export default PokCard;