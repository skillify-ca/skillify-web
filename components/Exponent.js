import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

export default function Exponent(props) {
  /**
   * increment / decrement power button
   * combine one exponent into two exponents
   * break two exponents into one
   */
  const representation1 = "x^" + props.power
  const representation2 = "(" + "X".repeat(props.power) + ")"
  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided) => (
        <div 
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        onClick={() => props.onClick(props.id)}
        className="divide-y text-xl container w-60 text-center p-16 bg-red-500">
         {props.expanded ? representation2 : representation1}
        </div>
      )}
    </Draggable>
  );
}
