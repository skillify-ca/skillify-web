import { words } from "lodash";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import EvaluateExpression from "../../components/coding/EvaluateExpression";
import HashMap from "../../components/coding/HashMap";
import Resources from "../../components/coding/Resources";
import { Button } from "../../components/ui/Button";
import {
  evaluateExpressionSelector,
  onNext,
  onPrevious,
  reset,
  setInput,
} from "../../redux/evaluateExpressionSlice";

import { useAppDispatch } from "../../redux/store";

export default function WordPattern(props) {
  const onResetRequested = () => {
    setIndex(0);
    setDictionary(new Map())
    setResult(undefined)
    setIsComplete(false)
  };
  const words = () => { return str.split(" ") }

  const onAdvanceRequested = () => {
    if (index === pattern.length) {
      setIsComplete(true);
      setResult(true);
    } else {
      setIndex(index + 1)
      const c = dictionary.get(pattern.charAt(index))
      const word = dictionary.get(words()[index])

      if (c !== word) {
        setIsComplete(true)
        setResult(false)
      } else {
        if (c === undefined) {
          dictionary.set(pattern.charAt(index), index)
        }
        if (word === undefined) {
          dictionary.set(words()[index], index)
        }
      }
    }
  };

  const onClearRequested = () => {
    setPattern("");
    setStr("");
    setDictionary(new Map())
    setIndex(0);
    setResult(undefined)
    setIsComplete(false)
  };

  const onStrInputChangeRequested = (val) => {
    setStr(val);
  };
  const onPatternInputChangeRequested = (val) => {
    setPattern(val);
  };

  const [isComplete, setIsComplete] = useState(false);
  const [result, setResult] = useState<boolean>();
  const [index, setIndex] = useState(0);
  const [str, setStr] = useState("");
  const [pattern, setPattern] = useState("");
  const [dictionary, setDictionary] = useState(new Map<string, number>());


  return (
    <>
      <div className="sticky top-0 w-full shadow-md">
        <h1 className="w-full p-4 text-2xl font-bold text-center bg-blue-300">
          290. Word Pattern
        </h1>
        <p className="w-full p-4 text-center bg-blue-300">
          Given a pattern and a string s, find if s follows the same pattern. 
          Here follow means a full match, such that there is a bijection between 
          a letter in pattern and a non-empty word in s.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 heropattern-bamboo-gray-300">
        <div className="grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2">
          <div className="flex flex-col justify-center gap-4 p-8 bg-white shadow-lg rounded-xl">
            <p className="font-bold">Resources</p>
            <a
              href="https://leetcode.com/problems/word-pattern/"
              className="text-blue-500 underline"
            >
              Leetcode #290
            </a>
            <a
              href="https://stackoverflow.com/questions/228038/best-way-to-reverse-a-string"
              className="text-blue-500 underline"
            >
              StackOverflow Thread
            </a>
            <iframe
              width="110"
              height="200"
              className="w-full"
              src="https://www.youtube.com/embed/NA--2JiDaeQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-xl">
            <p className="font-bold">Algorithm</p>
            Use a head and a tail pointer to traverse the string. Swap the head
            and tail characters each time. Stop when the head passes the tail.
          </div>
          <div className="flex flex-col gap-2 p-4 bg-white shadow-lg rounded-xl">
            <h2 className="font-bold">Pattern Input</h2>
            <input
              className="p-4 bg-blue-50"
              value={pattern}
              onChange={(e) => onPatternInputChangeRequested(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 p-4 bg-white shadow-lg rounded-xl">
            <h2 className="font-bold">Words Input</h2>
            <input
              className="p-4 bg-blue-50"
              value={str}
              onChange={(e) => onStrInputChangeRequested(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-xl">
          <p className="font-bold">Interactive</p>
          <HashMap data={dictionary} title="Dictionary" />
          {isComplete && (
                  <p className="text-green-600">
                    Finished! The pattern does {result ? "" : " not "} match the words!
                  </p>
                )}
          </div>

          <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-xl">
            <p className="font-bold">Controls</p>
            <div className="grid grid-cols-2 gap-4">
          
              <Button
                disabled={isComplete}
                label="Advance"
                backgroundColor="blue"
                textColor="white"
                onClick={onAdvanceRequested}
              />
              <Button
                label="Reset"
                backgroundColor="blue"
                textColor="white"
                onClick={onResetRequested}
              />
              <Button
                label="Clear"
                backgroundColor="blue"
                textColor="white"
                onClick={onClearRequested}
              />
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
}
