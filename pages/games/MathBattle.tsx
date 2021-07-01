import React, { useState } from "react";
import DiagnosticNavbar from "../../components/DiagnosticNavbar";
import CreateRoom from "../../components/mathBattle/createRoom";
import { Button } from "../../components/stories/Button";

const MathBattle = () => {
  return (
    <div>
      <DiagnosticNavbar />
      <div className="p-4">
        {" "}
        <CreateRoom />
      </div>
    </div>
  );
};
export default MathBattle;
