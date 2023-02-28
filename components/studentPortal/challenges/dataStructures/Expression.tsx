import { useState } from "react";

export default function Expression({ text, value }) {
  const [showValue, setShowValue] = useState(false);
  return (
    <>
      {showValue && (
        <span
          onClick={() => setShowValue(false)}
          className="p-1 rounded-md cursor-pointer bg-sky-200"
        >
          {value}
        </span>
      )}
      {!showValue && (
        <span
          onClick={() => setShowValue(true)}
          className={`p-1 cursor-pointer rounded-md bg-sky-200`}
        >
          {text}
        </span>
      )}
    </>
  );
}
