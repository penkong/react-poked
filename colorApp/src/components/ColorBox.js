import './ColorBox.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//with router give us history obj a.nd .. props
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';


class ColorBox extends Component {

  state = {copied: false};

  changeCopyState = () => {
    this.setState({copied: true}, ()=> {
      setTimeout(()=> this.setState({copied: false}), 2000);
    });
  }

  render() {
    const { name, background, moreUrl, showLink } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.12;
    const isLightColor = chroma(background).luminance() >= 0.7;

    return (
      <CopyToClipboard  onCopy={this.changeCopyState} text={background}>
        <div className="ColorBox" style={{background}}>

          {/* these will show on onCopy */}
          <div className={`copy-overlay ${copied && "show"}`} style={{background}}></div>
          <div className={`copy-message ${copied && "show"}`}>
            <h1>copied!</h1>
            <p className={isLightColor && "dark-text"}>{background}</p>
          </div>

          {/* these are all text on default showing */}
          <div className="copy-container">
            <div className="box-content">
              <span className={isDarkColor && "light-text"}>{name}</span>
            </div>
            <button className={`copy-button ${isLightColor && "dark-text"}`}>Copy</button>
          </div>
          {/* e.stopProgpagation stop events from parent */}
          {showLink && (
            <Link to={moreUrl}
              onClick={e => e.stopPropagation()}>
              <span className={`see-more ${isLightColor && "dark-text"}`}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;