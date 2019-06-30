import sizes from './sizes';

export default  {
  root: {
    backgroundColor: "lightblue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",

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