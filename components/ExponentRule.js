import React, { useState } from "react";
import Exponent from "./Exponent";

export default function ExponentRule() {
  /**
   * increment / decrement power button
   * combine one exponent into two exponents
   * break two exponents into one
   */

  const onAddBtnClick = (event) => {
    setInputList(inputList.concat(<Exponent power="6" />));
  };

  const [inputList, setInputList] = useState([
    <Exponent power="32" />,
    <Exponent power="3" />,
  ]);

  return (
    <div class="divide-y p-4 container mx-auto bg-green-500">
      <button onClick={onAddBtnClick}>Add exponent</button>

      <ul>{inputList}</ul>
    </div>
  );
}
