import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import PaletteMetaForm from './PaletteMetaForm';



const drawerWidth = 400;
const styles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    height: "64px",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navButtons: {

  }
}));

class PaletteFormNav extends Component {
  state = {newPaletteName: ""};
  
  handleChange = e => this.setState({[e.target.name]: e.target.value});
  
  render() {
    const { open , classes, handleDrawerOpen, palette, handleSubmit } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classnames(classes.appBar, {[classes.appBarShift]: open,})}
          >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={classnames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create Palette
            </Typography>
          </Toolbar>
          <div className={classes.navButtons}>
            <PaletteMetaForm 
              palette={palette}
              handleSubmit={handleSubmit}
            />
            <NavLink to="/">
              <Button variant="contained" color="secondary">
                go back
              </Button>
            </NavLink>
          </div>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles, {withTheme: true})(PaletteFormNav);