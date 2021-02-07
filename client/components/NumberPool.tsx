import React from "react";
import NumberTile from "./NumberTile";

const NumberPool = () => {
  return (
    <div className="flex flex-wrap">
      <NumberTile value={2} />
      <NumberTile value={4} />
      <NumberTile value={6} />
      <NumberTile value={8} />
      <NumberTile value={10} />
      <NumberTile value={12} />
      <NumberTile value={14} />
      <NumberTile value={16} />
      <NumberTile value={18} />
    </div>
  );
};

export default NumberPool;
