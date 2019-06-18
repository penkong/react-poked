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
    const {exp, isWinner} = this.props;
    let title;
    if(isWinner) title = <h1 className="Pokdex-winner">winner hand</h1>
    else title = <h1 className="Pokdex-loser">loser hand</h1>
    return (
      <div className="Pokdex">
        {title}
        <h3>total: {exp}</h3>
        <div className="Pokdex-cards">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default Pokdex;
