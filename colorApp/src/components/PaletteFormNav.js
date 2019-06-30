import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotosIcon';
import Button from '@material-ui/core/Button';
import PaletteMetaForm from './PaletteMetaForm';
import styles from '../styles/PaletteFormNavStyles';

class PaletteFormNav extends Component {
  state = {newPaletteName: "", formShowing: false};
  
  handleChange = e => this.setState({[e.target.name]: e.target.value});
  handleClickOpen = () => this.setState({formShowing: true});
  hideForm = () => this.setState({formShowing: false});
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
              className={classnames(classes.menuButton, {[classes.hide] : open })}
            >
              <AddToPhotosIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create Palette
            </Typography>
          </Toolbar>
          <div className={classes.navButtons}>
            <NavLink to="/" className={classes.link}>
              <Button className={classes.button} variant="contained" color="secondary">
                go back
              </Button>
            </NavLink>
            <Button className={classes.button} variant="contained" color="primary" onClick={this.handleClickOpen}>
              Save
            </Button>
          </div>
        </AppBar>
        {
          this.state.formShowing &&
          <PaletteMetaForm 
            palette={palette}
            handleSubmit={handleSubmit}
            hideForm={this.hideForm}
          />
        }
      </div>
    );
  }
}

export default withStyles(styles, {withTheme: true})(PaletteFormNav);