import chroma from 'chroma-js';
import sizes from './sizes';


export default  {
  colorBox: {
    width: "20%",
    height: props => props.showFullPalette ? "25%" : "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4.5px",
    "&:hover button": {
      opacity: "1",
    },
    // 0 up 500px
    // "@media (max-width: 500px)":{
    //   width: "100%",
    // }
    [sizes.down("lg")] : {
      width: "25%",
      height: props => props.showFullPalette ? "20%" : "33.3333333%",
    },
    [sizes.down("md")] : {
      width: "50%",
      height: props => props.showFullPalette ? "10%" : "20%",
    },
    [sizes.down("xs")] : {
      width: "100%",
      height: props => props.showFullPalette ? "5%" : "10%",
    }
  },
  copyText: {
    color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white",
  },
  colorName: {
    color: props => chroma(props.background).luminance() <= 0.12 ? "white" : "black",
  },
  seeMore: {
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0",
    bottom: "0",
    color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
  copyButton: {
    position: "absolute",
    display: "inline-block",
    width: "100px",
    height: "30px",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255,255,255,0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    textTransform: "uppercase",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    opacity: "0"
  },
  boxContent: {
    position: "absolute",
    padding: "10px",
    width: "90%",
    left: "0",
    bottom: "0",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.8s ease-in-out",
    transform: "scale(0.1)",
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "100",
    position: "absolute",
  },
  copyMessage: {
    position: "fixed",
    left: "0",
    right: "0",
    bottom: "0",
    top: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      fontWeight: "600",
      textShadow: "1px 1px gray",
      /* background: rgba(255,255,255,0.3")", */
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      [sizes.down("xs")]: {
        fontSize: "4.5rem"
      }
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "200",
    }
  },
  showCpMsg: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "101",
    transition: "all .9s ease-in-out",
    transitionDelay: ".2s",
  }
}