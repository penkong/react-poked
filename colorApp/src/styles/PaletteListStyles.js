import sizes from './sizes';
import bg from './Flat-Mountains.svg';
export default  {
  "@global": {
    // it means reference prefix in any file here
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out",
    },
  },
  root: {
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#ff7700",
    backgroundImage: `url(${bg})`,
    overFlow: "scroll"
  },
  heading: {
    fontSize: "2rem",
  },
  container: {
    width: "70%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("lg")]: {
      width: "80%",
    },
    [sizes.down("sm")]: {
      width: "70%",
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white",
      fontSize: "1.4rem"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "1.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      gridGap: "1rem",
      gridTemplateColumns: "repeat(1, 100%)",
    },
  }
}