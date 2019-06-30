import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';
import styles from '../styles/PaletteListStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
// jss using styled components
// material ui has own internal
class PaletteList extends Component {
  state = {deleteDialog: false , deletingId: ""};
  handleDelete = () => {
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog();
  }
  openDialog = id => {
    this.setState({deleteDialog: true, deletingId: id});
  }
  closeDialog = () => {
    this.setState({deleteDialog: false, deletingId: ""});
  }
  goToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  }
  renderPalettes(){
    const { palettes } = this.props;
    return palettes.map(palette => (
      <CSSTransition classNames="fade" timeout={500} key={palette.id}>
        <MiniPalette 
          key={palette.id}
          id={palette.id}
          // deletePalette={deletePalette}
          openDialog={this.openDialog}
          {...palette} 
          goToPalette={this.goToPalette}
        />
      </CSSTransition>
    ))
  }

  render() {
    const { classes } = this.props;
    const { deleteDialog } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          
          <nav className={classes.nav}>
            <h1 className={classes.heading}>React Picker</h1>
            <NavLink to="/palette/new">Create</NavLink>
          </nav>
          
          <TransitionGroup className={classes.palettes}>
            {this.renderPalettes()}
          </TransitionGroup>

        </div>
        <Dialog open={deleteDialog} aria-labelledby="delete-dialog-title" onClose={this.closeDialog}>
          <DialogTitle id="delete dialog title">Delete Palette</DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                  <CheckIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete"/>
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                  <CloseIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel"/>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);