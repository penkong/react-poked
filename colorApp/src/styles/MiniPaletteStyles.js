export default  {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "4px",
    padding: ".5rem",
    paddingRight: ".3rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": {
      opacity: 1,
    }
  },
  delete: {

  },
  deleteIcon: {
    color: "white",
    backgroundColor: "red",
    width: "20px",
    height: "20px",
    position: "absolute",
    right: 0,
    top: 0,
    padding: "10px",
    zIndex: 10,
    opacity: 0,
  },
  colors: {
    backgroundColor: "#daele4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden"
  },
  miniBox: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: ".5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginLeft: ".5rem",
    marginBottom: ".45rem",
    fontSize: "1.5rem"
  }
}
