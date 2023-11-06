import React from "react";

type CardProps = {
  value: string;
  onClick: (value: string) => void;
  matched?: boolean;
  flipped?: boolean;
};
export function Card({ value, onClick, matched, flipped }: CardProps) {
  return (
    <div
      className={`flex justify-center items-center cursor-pointer w-36 h-36 overflow-auto ${
        matched ? "bg-green-400" : "bg-orange-300"
      }`}
      onClick={() => {
        onClick(value);
      }}
    >
      {(flipped || matched) && (
        <p className="p-4 overflow-auto text-sm text-center select-none">
          {value}
        </p>
      )}
    </div>
  );
}
