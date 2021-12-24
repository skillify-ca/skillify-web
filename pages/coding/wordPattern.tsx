import { words } from "lodash";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import EvaluateExpression from "../../components/coding/EvaluateExpression";
import HashMap from "../../components/coding/HashMap";
import Resources from "../../components/coding/Resources";
import StringIteration from "../../components/coding/ArrayIteration";
import { Button } from "../../components/ui/Button";
import {
  evaluateExpressionSelector,
  onNext,
  onPrevious,
  reset,
  setInput,
} from "../../redux/evaluateExpressionSlice";

import { useAppDispatch } from "../../redux/store";
import ArrayIteration from "../../components/coding/ArrayIteration";

export default function WordPattern(props) {
  const onResetRequested = () => {
    setIndex(0);
    setDictionary(new Map())
    setResult(undefined)
    setIsComplete(false)
    setMessage("")
  };
  const words = () => {
    if (str.length === 0) return [];
    return str.split(" ")
  }

  const onAdvanceRequested = () => {
    if (index === pattern.length - 1) {
      setIsComplete(true);
      setResult(true);
      setMessage("You got to the end of the string, so the pattern match this list of words. Congrats!")
    } else {
      setIndex(index + 1)
    }
  };

  const onCheckDictionaryRequested = () => {
    const c = dictionary.get(pattern.charAt(index))
    const word = dictionary.get(words()[index])

    if (c !== word) {
      if (c === undefined) {
        setMessage("The word is already in the dictionary with a different character value. The pattern does not match.")
      }
      if (word === undefined) {
        setMessage("The character is already in the dictionary with a different word value. The pattern does not match.")
      }
    } else {
      if (c === undefined && word === undefined) {
        setMessage("Dictionary doesn't contain current character or word. It is safe to add both to the dictionary.")
      } else {
        setMessage("The character and word are mapped to each other already in the dictionary. It is safe to continue.")
      }
    }
  }

  const onSetDictionaryRequested = () => {
    const c = dictionary.get(pattern.charAt(index))
    const word = dictionary.get(words()[index])
    setMessage("")
    if (c === undefined && word === undefined) {
      const newDictionary = new Map(dictionary);
      newDictionary.set(pattern.charAt(index), index)
      newDictionary.set(words()[index], index)
      setDictionary(newDictionary)
    }
  }

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
  const [message, setMessage] = useState("");
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
              href="https://cheonhyangzhang.gitbooks.io/leetcode-solutions/content/290-word-pattern.html"
              className="text-blue-500 underline"
            >
              Blog Post
            </a>
            <iframe
              width="110"
              height="200"
              className="w-full"
              src="https://www.youtube.com/embed/dnlB0lvz5LY"
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
          <div className="flex flex-col space-y-4 p-4 bg-white shadow-lg rounded-xl">
            <p className="font-bold ">Interactive</p>
            <div className="flex flex-col space-y-2 bg-white">
              <p className="font-bold text-sm">Pattern</p>
              <ArrayIteration data={pattern.split("")} currentIndex={index} />
            </div>
            <div className="flex flex-col space-y-2 bg-white">
              <p className="font-bold text-sm">Words</p>
              <ArrayIteration data={words()} currentIndex={index} />
            </div>
            <div className="flex flex-col space-y-2 bg-white">
              <p className="font-bold text-sm">Dictionary</p>

              <HashMap data={dictionary} />
            </div>
            <div className="flex flex-col space-y-2 bg-white">
              <p className="font-bold text-sm">Message</p>
              <p className="font-bold text-sm">{message}</p>

            </div>
          </div>

          <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-xl">
            <p className="font-bold">Controls</p>
            <div className="grid grid-cols-2 gap-4">
              <Button
                disabled={isComplete}
                label="Check Dictionary"
                backgroundColor="blue"
                textColor="white"
                onClick={onCheckDictionaryRequested}
              />
              <Button
                disabled={isComplete}
                label="Set Dictionary"
                backgroundColor="blue"
                textColor="white"
                onClick={onSetDictionaryRequested}
              />
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
