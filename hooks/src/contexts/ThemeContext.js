import React, { createContext } from 'react';
import useToggleState from '../hooks/useToggleState';

export const ThemeContext = createContext();

export const ThemeProvider = props => {
  const [isDarkMode, toggleTheme] = useToggleState(false);
  return (
    //...this.state
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

