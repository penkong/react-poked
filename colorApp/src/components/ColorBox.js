//with router give us history obj a.nd .. props
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from "@material-ui/styles";
import styles from "../styles/ColorBoxStyles";

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
          <div className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} style={{background}}></div>
          <div className={`${classes.copyMessage} ${copied && classes.showCpMsg}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>

          {/* these are all text on default showing */}
          <div>
            <div className={classes.boxContent}>
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