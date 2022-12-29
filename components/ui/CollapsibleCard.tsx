import { useState } from "react";

export default function CollapsibleCard({ title, children }) {
  const [isOpen, setOpen] = useState(true);

  const onHeaderClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-4 m-4 bg-white shadow-lg rounded-xl">
      <h3
        onClick={onHeaderClick}
        className={`p-4 font-bold cursor-pointer ${
          isOpen ? "rounded-t-xl" : "rounded-xl"
        } hover:bg-slate-400 bg-slate-300`}
      >
        {title}
      </h3>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
}
