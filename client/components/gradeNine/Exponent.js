import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

export default function Exponent(props) {
  /**
   * increment / decrement power button
   * combine one exponent into two exponents
   * break two exponents into one
   */
  var base = "x";
  if (props.base) {
      base = "(" + props.base + ")" + "" // have to cast as string, typescript would be better here
  }

  const representation1 = base + "^" + props.power;
  const representation2 = base.repeat(props.power);
  return (
    <div
      onClick={() => props.onClick(props.id)}
      className="divide-y text-xl container w-60 text-center p-16 bg-red-500"
    >
      {props.expanded ? representation2 : representation1}
    </div>
  );
}
