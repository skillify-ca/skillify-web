import React, { useState } from "react";
import Exponent from "./Exponent";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

export default function ExponentRule() {
  /**
   * increment / decrement power button
   * combine one exponent into two exponents
   * break two exponents into one
   */

  const initialData = {
    exponents: [
      { id: "exp-1", power: 1, expanded: false },
      { id: "exp-2", power: 2, expanded: false },
      { id: "exp-3", power: 3, expanded: false },
    ],
    columns: {
      "column-1": {
        id: "column-1",
        title: "To do",
        taskIds: ["exp-1", "exp-2", "exp-3"],
      },
    },
  };

  const onAddBtnClick = (event) => {
    setCounter(counter + 1);
    setInputList(
      inputList.concat({ id: "exp-" + (counter + 1), power: 2, expanded: false })
    );
  };

  const onExponentClick = (id) => {
    console.log(mode);
    console.log(id);

    const newExponents = Array.from(inputList);
    if (mode === "increment") {
      const index = inputList.findIndex((x) => x.id === id);
      newExponents.splice(index, 1);
      newExponents.splice(index, 0, {
        id: id,
        power: inputList[index].power + 1,
      });
    } else if (mode === "decrement") {
      const index = inputList.findIndex((x) => x.id === id);
      newExponents.splice(index, 1);
      newExponents.splice(index, 0, {
        id: id,
        power: inputList[index].power - 1,
      });
    } else if (mode == "delete") {
      const index = inputList.findIndex((x) => x.id === id);
      newExponents.splice(index, 1);
    } else if (mode == "split") {
      const index = inputList.findIndex((x) => x.id === id);
      const power = inputList[index].power;
      if (power == 0 || power == 1 || power == -1) {
        return;
      }
      const half1 = Math.floor(power / 2);
      const half2 = Math.ceil(power / 2);
      newExponents.splice(index, 1);
      newExponents.splice(index, 0, {
        id: id,
        power: half1,
      });
      newExponents.splice(index, 0, {
        id: "exp-" + (counter + 1),
        power: half2,
      });
      setCounter(counter + 1);
    } else if (mode == "switch") {
        const index = inputList.findIndex((x) => x.id === id);
        newExponents.splice(index, 1);
        newExponents.splice(index, 0, {
            id: "exp-" + (counter + 1),
            power: inputList[index].power,
            expanded: !inputList[index].expanded
        })
        setCounter(counter + 1);
    }
    setInputList(newExponents);
  };

  const [counter, setCounter] = useState(initialData.exponents.length);
  const [inputList, setInputList] = useState(initialData.exponents);
  const [mode, setMode] = useState("increment");

  const handleChange = (e) => {
    setMode(e.target.value);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId, combine } = result;
    console.log(result);

    const newExponents = Array.from(inputList);

    if (result.combine) {
      console.log(combine.draggableId);
      console.log(newExponents);
      console.log(newExponents.find((it) => it.id === combine.draggableId));
      // super simple: just removing the dragging item
      const power1 = newExponents.find((it) => it.id === combine.draggableId)
        .power;
      const power2 = newExponents.find((it) => it.id === draggableId).power;
      console.log(power1);
      console.log(power2);
      const destinationIndex = newExponents.findIndex(
        (it) => it.id === combine.draggableId
      );

      newExponents.splice(source.index, 1);
      newExponents.splice(destinationIndex, 1);
      newExponents.splice(destinationIndex, 0, {
        id: "exp-" + counter,
        power: power1 + power2,
      });
      setCounter(counter + 1);
      setInputList(newExponents);
      return;
    }

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    newExponents.splice(source.index, 1);
    newExponents.splice(
      destination.index,
      0,
      inputList.find((it) => it.id === draggableId)
    );
    setInputList(newExponents);
  };

  return (
    <div className="divide-y p-4 container mx-auto bg-green-500">
      <div className="text-xl text-center">
        You can simplify exponent expressions by combining terms with the same base. 
        The following terms all have the same base (X) and they are all being multiplied together.
        How can you generally simplify expressions that look like X^a * X^b?
    </div>  
      <div className="text-xl text-center">
        Total: X^{inputList.map((exp) => exp.power).reduce((x, y) => x + y)}
      </div>
      <div className="p-4 bg-purple-500 m-4 flex justify-around">
        <form>
          <input
            type="radio"
            value="increment"
            id="increment"
            onChange={handleChange}
            name="mode"
            checked={mode === "increment"}
          />
          <label className="p-4">Increment</label>

          <input
            type="radio"
            value="decrement"
            id="decrement"
            onChange={handleChange}
            name="mode"
            checked={mode === "decrement"}
          />
          <label className="p-4">Decrement</label>

          <input
            type="radio"
            value="delete"
            id="delete"
            onChange={handleChange}
            name="mode"
            checked={mode === "delete"}
          />
          <label className="p-4">Delete</label>

          <input
            type="radio"
            value="split"
            id="split"
            onChange={handleChange}
            name="mode"
            checked={mode === "split"}
          />
          <label className="p-4">Split</label>

          <input
            type="radio"
            value="switch"
            id="switch"
            onChange={handleChange}
            name="mode"
            checked={mode === "switch"}
          />
          <label className="p-4">Switch</label>
        </form>
      </div>

      <button className="p-4 bg-blue-500 m-4" onClick={onAddBtnClick}>
        Add exponent
      </button>

      <DragDropContext onDragEnd={onDragEnd}>
        <Column
          key={"column-1"}
          column={initialData.columns["column-1"]}
          exponents={inputList}
          onClick={onExponentClick}
        />
      </DragDropContext>
    </div>
  );
}
