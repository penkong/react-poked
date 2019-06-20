import React, { Component } from 'react';
import Box from './Box';

class BoxList extends Component {
  state = {boxes: [
    {width: 10, height: 30, color: 'orange'}
  ]}
  render() {
    const boxes = this.state.boxes.map(box =>{
      return <Box width={box.width} height={box.height} color={box.color}/>
    })
    return (
      <div>
        <h1>Color box Maker</h1>
        {boxes}
      </div>
    );
  }
}

export default BoxList;