import React from "react";
import { ItemTypes } from "./ItemTypes";
import { NumberTile } from "./NumberTile";

const NumberPool = () => {
  return (
    <div className="flex flex-wrap">
      <NumberTile
            name={"2"}
            type={ItemTypes.NUMBER_TILE}
            isDropped={false}
          />
    </div>
  );
};

export default NumberPool;
