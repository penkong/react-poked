import './Pokdex.css';
import React, { Component } from 'react';
import PokCard from './PokCard';


class Pokdex extends Component {
  static defaultProps = {
		pokemon : [
			{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
			{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
			{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
			{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
			{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
			{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
			{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
			{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
		]
  };
  renderContent(){
    return this.props.pokemon.map(p=>{
      return <PokCard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
    })
  }
  render() {
    return (
      <div className="Pokdex">
        <h1>Pokdex!</h1>
        <div className="Pokdex-cards">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default Pokdex;
