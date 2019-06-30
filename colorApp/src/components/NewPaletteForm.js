import React, { Component } from 'react';
import classnames from 'classnames';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import { arrayMove } from "react-sortable-hoc";

const drawerWidth = 400;

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
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
    display: 'flex',
    alignItems: 'center',
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
  container: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  buttons: {
    width: "100%",
    
  },
  button: {
    width: "50%",
    
  }
}));

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors : 20
  }
  // const classes = useStyles();
  // const theme = useTheme();
  // const [open, setOpen] = React.useState(false);
  state = { 
    open: true, 
    colors: this.props.palette[0].colors, 
  };
  //--------------------------------
  handleDrawerOpen = () => {
    this.setState({ open: true });
  }
  
  handleDrawerClose = () => {
    this.setState({open: false });
  }
  //-----------------1
  handleSubmit = newPalette => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
    newPalette.colors = this.state.colors;
    this.props.savePalette(newPalette);
    this.props.history.push('/');
  }
  // ----------------2
  // 1 & 2
  handleChange = e => this.setState({[e.target.name]: e.target.value});
  clearColors = () => this.setState({ colors: [] });
  addRandomColor = () => {
    const allColors = this.props.palette.map(p => p.colors).flat();
    let rand = Math.floor(Math.random() * allColors.length);
    const randomColors = allColors[rand];
    this.setState({colors: [...this.state.colors, randomColors]});
  }
  addNewColor = newColor => {
    this.setState({colors: [...this.state.colors, newColor ]})
  }

  renderDrawer(){
    const { classes, maxColors } = this.props;
    const { open , currentColor, newName, colors } = this.state;
    const paletteIsFull = colors.length >= maxColors;
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
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>Design your palette</Typography>
          <div className={classes.buttons}>
            <Button 
              className={classes.button}
              variant="contained" 
              onClick={this.clearColors}
              color="secondary">
              Clear Palette
            </Button>
            <Button 
              className={classes.button}
              variant="contained" 
              onClick={this.addRandomColor}
              disabled={paletteIsFull}
              color="primary">
              Random Color
            </Button>
          </div>
          <ColorPickerForm 
            paletteIsFull={paletteIsFull}
            addNewColor={this.addNewColor}
            colors={colors}
          />
        </div>
      </Drawer>
    )
  }
  // ----------------3
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({colors}) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  }
  removeColor = colorName => {
    this.setState({
      colors: this.state.colors.filter(color => (
        color.name !== colorName
      ))
    })
  }

  renderMain(){
    const { classes } = this.props;
    const { open, colors } = this.state;
    return (
      <main
        className={classnames(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList 
          axis="xy"
          colors={colors} 
          removeColor={this.removeColor} 
          onSortEnd={this.onSortEnd}
        />
      </main>
    )
  }

  render() {
    const { classes , palette } = this.props;
    const { open} = this.state;
    return (
    <div className={classes.root}>
      
      <PaletteFormNav 
        open={open} 
        handleSubmit={this.handleSubmit}
        handleDrawerOpen={this.handleDrawerOpen}
        palette={palette}
      />
      {this.renderDrawer()}
      {this.renderMain()}
    </div>
    );
  }
}

export default withStyles(styles, {withTheme: true})(NewPaletteForm);