import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const dogLinks = this.props.dogs.map(d => (
      <li className="nav-item">
        <NavLink className="nav-link" to={`/dogs/${d.name}`} key={d.name}>{d.name}</NavLink>
      </li>
    ))
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Dog App</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-target="#navbarNav" 
          data-toggle="collapse"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/dogs">Home</NavLink>
            </li>
            {dogLinks}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;