import React, { Component, createContext } from 'react';

// it go to child
export const LanguageContext = createContext();


// it go to parent
export class LanguageProvider extends Component {
  state = {language: 'french'};
  changeLanguage = e => {
    this.setState({language: e.target.value });
  }
  render() {
    return (
      <LanguageContext.Provider value={{...this.state, changeLanguage: this.changeLanguage}}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}

export const withLanguageContext = Component => props => {
  return (
    <LanguageContext.Consumer>
      {value => <Component LanguageContext={value} {...props}/>}
    </LanguageContext.Consumer>
  )
}