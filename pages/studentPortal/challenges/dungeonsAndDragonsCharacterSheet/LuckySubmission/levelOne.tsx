import React, { useState } from "react";
import { ATTRIBUTE_LIST } from "../constants";
const levelOne = () => {
  // PSEUDOCODE
  // create a row with 6 attributes
  // create a list of the 6 attribute names
  // create a useState hook to track the attributes count independently
  // map each attribute, which should have a counter at 0 and the attribute name
  // each attribute has two buttons below to inc and dec that count

  // CONSTANTS
  const attributes = ATTRIBUTE_LIST;

  // STATE VARIABLES
  const [attributeCounts, setAttributeCounts] = useState([0, 0, 0, 0, 0, 0]);

  // CLICK HANDLERS
  const incrementHandler = (i) => {
    const nextCount = attributeCounts.map((counter, index) => {
      if (index === i) {
        return counter + 1;
      } else {
        return counter;
      }
    });
    setAttributeCounts(nextCount);
  };
  const decrementHandler = (i) => {
    const nextCount = attributeCounts.map((counter, index) => {
      if (index === i) {
        return counter - 1;
      } else {
        return counter;
      }
    });
    setAttributeCounts(nextCount);
  };

  // TSX RETURN
  return attributes.map((attribute, index) => (
    <div>
      {attribute}{" "}
      <div>
        {" "}
        <button onClick={() => incrementHandler(index)}>+</button>
        <button onClick={() => decrementHandler(index)}>-</button>
        <p>{attributeCounts[index]}</p>
      </div>
    </div>
  ));
};

export default levelOne;
