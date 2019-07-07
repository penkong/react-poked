import './App.css';
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';
import PageContent from './PageContent';
import NavbarF from './NavbarF';
import FormF from './FormF';

function App(){
  return (
    <ThemeProvider>
      {/* there is context provider here come from theme pro */}
      <LanguageProvider>
        <PageContent>
          <NavbarF/>
          <FormF/>
        </PageContent>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App;
