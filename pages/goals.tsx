import React, { useState } from "react";

import { useAuth } from "../lib/authContext";

export default function Goals(props) {
  const { user } = useAuth();

  return (
    <div className="flex flex-col p-4 m-4 overflow-auto bg-scroll">
      <div>
        <h2 className="mt-14 mb-9 font-bold text-lg">Current Goals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 mb-16"></div>
      </div>
      <div>
        <h2 className="mt-14 mb-9 font-bold text-lg">Completed Goals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 mb-16"></div>
      </div>
      <div>
        <h2 className="mt-14 mb-9 font-bold text-lg">Archived Goals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 mb-16"></div>
      </div>
    </div>
  );
}

Goals.auth = true;
