import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from '../constant';
import sizes from './sizes';

const drawerWidth = DRAWER_WIDTH;

const styles = makeStyles(theme => ({
  root: {
    display: "flex"
  }, 
  hide: {
    display: 'none',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    marginRight: "1rem",
    "& a": {
      textDecoration: "none",
    },
    [sizes.down("xs")]: {
      marginRight: "0.3rem",
    }
  },
  button: {
    margin: "0 0.5rem",
    [sizes.down("xs")]: {
      margin: 0,
    }
  },
  link: {
    textDecoration: "none",
  }
}));

export default styles;
