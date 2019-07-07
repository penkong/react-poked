import React, { useState, createContext } from 'react';

// it go to child
export const LanguageContext = createContext();

// it go to parent
export const LanguageProvider = props => {
  const [language, setLanguage] = useState('english');
  const changeLanguage = e => setLanguage(e.target.value);
  return (
    <LanguageContext.Provider value={{language, changeLanguage}}>
      {props.children}
    </LanguageContext.Provider>
  )
}

export const withLanguageContext = Component => props => {
  return (
    <LanguageContext.Consumer>
      {value => <Component LanguageContext={value} {...props}/>}
    </LanguageContext.Consumer>
  )
}