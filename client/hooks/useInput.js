import React, { useState, useEffect } from "react";

export default function useInput({ type /*...*/ }) {
  const [value, setValue] = useState("");
  const input = (
    <input
      className="input w-1/2 border border-gray-400 appearance-none rounded px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
    />
  );
return [value, setValue, input];
}
