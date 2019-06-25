import './DogList.css';
import React, { Component } from 'react';

class DogList extends Component {
  renderContent () {
    return this.props.dogs.map(d => {
      return (
        <div className="Dog col-md-6 col-lg-4 text-center" key={d.name}>
          <img src={d.src} alt={d.name}/>
          <h3>{d.name}</h3>
        </div>
      ); 
    })
  }
  render() {
    return (
      <div className="DogList">
        <h1 className="display-1 text-center">dogList</h1>
        <div className="container">
          <div className="row">
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

export default DogList;