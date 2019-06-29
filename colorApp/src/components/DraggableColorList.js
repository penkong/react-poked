import React from 'react'
import { SortableContainer } from "react-sortable-hoc";
import DraggableColor from './DraggableColor';

const DraggableColorList = SortableContainer(({colors, removeColor}) => {
  return (
    <div style={{height: "100%"}}>
      {colors.map((color, index) => (
            <DraggableColor
              index={index}
              key={color.name}
              color={color.color} 
              name={color.name} 
              handleClick={() => this.removeColor(color.name)}
            />
        ))}
    </div>
  )
})

export default DraggableColorList;
