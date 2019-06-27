import './ColorBox.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//with router give us history obj a.nd .. props
import { CopyToClipboard } from 'react-copy-to-clipboard';
import palette from './Palette';


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
    return (
      <CopyToClipboard onCopy={this.changeCopyState} text={background}>
        <div className="ColorBox" style={{background}}>

          {/* these will show on onCopy */}
          <div className={`copy-overlay ${copied && "show"}`} style={{background}}></div>
          <div className={`copy-message ${copied && "show"}`}>
            <h1>copied!</h1>
            <p>{background}</p>
          </div>

          {/* these are all text on default showing */}
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          {/* e.stopProgpagation stop events from parent */}
          {showLink && (
            <Link to={moreUrl}
              onClick={e => e.stopPropagation()}>
              <span className="see-more">More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;