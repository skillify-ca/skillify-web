import React, { useState } from "react";

export interface DropDownMenuProps {
  words: string[];
  value?: string;
  setValue?: (value: string) => void;
  answer?: string;
  point?: number;
  getPoint?: (value: number) => void;
  isCorrect?: boolean;
  setIsCorrect?: (value: boolean) => void;
}

export const DropDownMenu = ({
  words,
  value,
  setValue,
  answer,
  point,
  getPoint,
  isCorrect,
  setIsCorrect,
}: DropDownMenuProps) => {
  const onChange = (e) => {
    setValue(e.target.value);
    if (answer === e.target.value) {
      getPoint(1);
    } else {
      getPoint(0);
      setIsCorrect(false);
    }
  };

  return (
    <div
      className={`${
        isCorrect ? "border-green-500" : "border-gray-500"
      } inline-block border`}
    >
      <select
        className={`${isCorrect ? "text-green-500" : "text--black"}`}
        value={value}
        onChange={onChange}
      >
        <option>...</option>
        {words
          .map((word) => ({ word, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ word }) => (
            <option key={word} value={word}>
              {word}
            </option>
          ))}
      </select>
    </div>
  );
};
