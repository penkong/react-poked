import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//with router give us history obj a.nd .. props
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { withStyles } from "@material-ui/styles";
import './ColorBox.css';


const styles = {
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
  }
}

class ColorBox extends Component {

  state = {copied: false};

  changeCopyState = () => {
    this.setState({copied: true}, ()=> {
      setTimeout(()=> this.setState({copied: false}), 2000);
    });
  }

  render() {
    const { name, background, moreUrl, showFullPalette, classes } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard  onCopy={this.changeCopyState} text={background}>
        <div className={classes.colorBox} style={{background}}>

          {/* these will show on onCopy */}
          <div className={`copy-overlay ${copied && "show"}`} style={{background}}></div>
          <div className={`copy-message ${copied && "show"}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>

          {/* these are all text on default showing */}
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {/* e.stopProgpagation stop events from parent */}
          {showFullPalette && (
            <Link to={moreUrl}
              onClick={e => e.stopPropagation()}>
              <span className={classes.seeMore}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);