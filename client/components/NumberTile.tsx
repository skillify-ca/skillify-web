import React from "react";

const NumberTile = ({value}) => {
    return <div className="bg-purple-400 w-24 h-24 m-4 flex items-center justify-center">
        <p>{value}</p>
    </div>;
  };
  
  export default NumberTile;
  