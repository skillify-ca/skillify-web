import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import DraggableExponent from "./DraggableExponent";

export default function Column(props) {
  return (
    <div>
      <Droppable isCombineEnabled droppableId={props.column.id}>
        {(provided) => (
          <div className="p-4" ref={provided.innerRef} {...provided.droppableProps}>
            {props.exponents.map((exp, index) => (
              <DraggableExponent
                key={exp.id}
                power={exp.power}
                id={exp.id}
                index={index}
                expanded={exp.expanded}
                onClick={props.onClick}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
