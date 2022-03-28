import React from "react";

export enum OptionState {
  DEFAULT,
  SELECTED,
  INCORRECT,
  CORRECT,
}
export type MCOptionProps = {
  text: string;
  state: OptionState;
};

export default function MCOption({ text, state }: MCOptionProps) {
  const getBorderColour = (state) => {
    switch (+state) {
      case OptionState.DEFAULT:
        return "shadow-md border-0";
      case OptionState.SELECTED:
        return "border-rattata border-4";
      case OptionState.INCORRECT:
        return "border-moltres-500 border-4";
      case OptionState.CORRECT:
        return "border-bulbasaur-500 border-4";
    }
  };
  const getRadioButtonColour = (state) => {
    switch (+state) {
      case OptionState.DEFAULT:
        return "";
      case OptionState.SELECTED:
        return "bg-rattata";
      case OptionState.INCORRECT:
        return "bg-moltres-500";
      case OptionState.CORRECT:
        return "bg-bulbasaur-500";
    }
  };

  return (
    <div
      className={`flex items-center h-16 px-6 bg-white rounded-md w-108 ${getBorderColour(
        state
      )}`}
    >
      <div className="flex items-center justify-center w-6 h-6 mr-6 bg-gray-200 rounded-full">
        <div
          className={`w-4 h-4 rounded-full ${getRadioButtonColour(state)}`}
        ></div>
      </div>
      <p>{text}</p>
    </div>
  );
}
