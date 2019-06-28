import React, { Component } from 'react';
import classnames from 'classnames';
import { withStyles, makeStyles, withTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DraggableColor from './DraggableColor';

const drawerWidth = 600;

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

class NewPaletteForm extends Component {
  // const classes = useStyles();
  // const theme = useTheme();
  // const [open, setOpen] = React.useState(false);
  state = { 
    open: true, 
    currentColor: "teal", 
    colors: [], 
    newName: ''
  };

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
      this.state.colors.every(({name}) => (
        name.toLowerCase() !== value.toLowerCase()
      ))
    })
    ValidatorForm.addValidationRule("isColorUnique", value => {
      this.state.colors.every(({color}) => (
        color !== this.state.currentColor
      ))
    })
  }
  

  //--------------------------------
  handleDrawerOpen = () => {
    this.setState({ open: true });
  }
  
  handleDrawerClose = () => {
    this.setState({open: false });
  }
  //-----------------1
  renderAppBar(){
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <AppBar
        position="fixed"
        className={classnames(classes.appBar, {[classes.appBarShift]: open,})}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.handleDrawerOpen}
            edge="start"
            className={classnames(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            React Colors
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
  // ----------------2
  handleChange = e => this.setState({newName: e.target.value});

  addNewColor = () => {
    const newColor = {color: this.state.currentColor, name: this.state.newName}
    this.setState({colors: [...this.state.colors, newColor ]})
  }
  updateButtonColor = newColor => {
    //cl
    this.setState({currentColor: newColor.hex})
  }
  renderDrawer(){
    const { classes } = this.props;
    const { open , currentColor, newName } = this.state;
    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{ paper: classes.drawerPaper,}}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4">
          Design your palette
        </Typography>
        <div>
          <Button variant="contained" color="secondary">Clear Palette</Button>
          <Button variant="contained" color="primary">Random Color</Button>
        </div>
        <ChromePicker color={currentColor} onChangeComplete={this.updateButtonColor}/>
        <ValidatorForm onSubmit={this.addNewColor}>
          <TextValidator 
            value={newName} 
            onChange={this.handleChange}
            validators={["required", "isColorUnique","isColorNameUnique"]}  
            errorMessages={["this field id require", "Color already taken",
              "Color name must ber unique"]}
          />
          <Button variant="contained" 
            color="primary" 
            style={{backgroundColor: currentColor}}
            // onClick={this.addNewColor}
            type="submit"
          >
            Add Color
          </Button>
        </ValidatorForm>
      </Drawer>
    )
  }
  // ----------------3
  renderMain(){
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <main
        className={classnames(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {this.state.colors.map(color => (
            <DraggableColor color={color.color} name={color.name} />
        ))}
      </main>
    )
  }

  render() {
    const { classes } = this.props;
    return (
    <div className={classes.root}>
      <CssBaseline />
      {this.renderAppBar()}
      {this.renderDrawer()}
      {this.renderMain()}
    </div>
    );
  }
}

export default withStyles(styles, {withTheme: true})(NewPaletteForm);