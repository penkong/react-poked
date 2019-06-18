import './Pokdex.css';
import React, { Component } from 'react';
import PokCard from './PokCard';


class Pokdex extends Component {
  renderContent(){
    return this.props.pokemon.map(p=>{
      return <PokCard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
    })
  }
  render() {
    return (
      <div className="Pokdex">
        <p>total: {this.props.exp}</p>
        <p>{this.props.isWinner ? 'winner' : 'loser'}</p>
        <div className="Pokdex-cards">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default Pokdex;
