import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { withLanguageContext } from '../contexts/LanguageContext';

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Switch from '@material-ui/core/Switch';
import SearchIcon from '@material-ui/icons/Search';
import styles from '../styles/NavbarStyles';

const content = {
  english: {
    search: "Search",
    flag: "en"
  },
  french: {
    search: "Chercher",
    flag: "fr"
  },
  spanish: {
    search: "Buscar",
    flag: "es"
  },
}

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode, toggleTheme } = this.context;
    const { classes } = this.props;
    // second context come by hoc as consumer
    const { language } = this.props.LanguageContext;
    const { search, flag } = content[language];
    
    return (
      <div className={classes.root}>
        <AppBar position='static' color={isDarkMode ? "default": "primary"}>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit'>
              <span>{flag}</span>
            </IconButton>
            <Typography className={classes.title} variant='h6' color='inherit'>
              App Title
            </Typography>
            <Switch onChange={toggleTheme}/>
            <div className={classes.grow}/>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase 
                placeholder={`${search}...`} 
                className={{
                  root: classes.inputRoot, 
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withLanguageContext(withStyles(styles)(Navbar));