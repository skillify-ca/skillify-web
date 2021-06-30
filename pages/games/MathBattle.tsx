import React, { useState } from "react";
import CreateRoom from "../../components/mathBattle/createRoom";
import Navbar from "../../components/Navbar";
import { Button } from "../../components/stories/Button";

const MathBattle = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        {" "}
        <CreateRoom />
      </div>
    </div>
  );
};
export default MathBattle;
