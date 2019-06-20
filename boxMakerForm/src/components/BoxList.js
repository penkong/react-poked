import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
  state = { boxes: [] };
  removeBox = id => {
    this.setState({
      boxes: this.state.boxes.filter(box => id !== box.id)
    })
  }
  createBox = newBox => {
    this.setState({ boxes: [...this.state.boxes, newBox]});
  }
  render() {
    const boxes = this.state.boxes.map(box =>{
      //key cant pass as props we use id
      return <Box 
              key={box.id} 
              id={box.id} 
              width={box.width} 
              height={box.height} 
              color={box.color}
              removeBox={()=>this.removeBox(box.id)}
            />
    })
    return (
      <div>
        <h1>Color box Maker</h1>
        <NewBoxForm createBox={this.createBox}/>
        {boxes}
      </div>
    );
  }
}

export default BoxList;