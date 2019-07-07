import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  state = {isDarkMode: true};
  render() {
    return (
      <ThemeContext.Provider value={{...this.state, tasteLikeChicken: true}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

