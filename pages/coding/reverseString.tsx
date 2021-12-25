import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../../components/ui/Button";

export default function ReverseString(props) {
  const onResetRequested = () => {
    setIsSwapping(false);
    setStr(original.split(""));
    setHead(0);
    setTail(s.length - 1);
  };
  const onAdvanceRequested = () => {
    setHead(head + 1);
    setTail(tail - 1);
  };
  const onClearRequested = () => {
    setOriginal("");
    setStr([]);
    setHead(0);
    setTail(s.length - 1);
  };

  const onInputChangeRequested = (val) => {
    setOriginal(val);
    setStr(val.split(""));
    setHead(0);
    setTail(val.length - 1);
  };

  const onSwapRequested = () => {
    setIsSwapping(true);
    const next = [...s];

    var currentChar = next[head];
    next[head] = next[tail]; //o l l e o
    next[tail] = currentChar; // o l l e h
    setStr(next);
  };

  const isComplete = () => {
    return head >= tail && s.length > 0;
  };

  const [s, setStr] = useState([]);
  const [original, setOriginal] = useState("");
  const [isSwapping, setIsSwapping] = useState(false);
  const [head, setHead] = useState(0);
  const [tail, setTail] = useState(s.length - 1);
  const getCharColour = (index) => {
    if (index === head && index === tail)
      return "bg-gradient-to-b from-green-300 to-yellow-300";
    if (index === head) return "bg-green-300";
    if (index === tail) return "bg-yellow-300";
    return "bg-blue-300";
  };

  return (
    <>
      <div className="sticky top-0 w-full shadow-md">
        <h1 className="w-full p-4 text-2xl font-bold text-center bg-blue-300">
          344. Reverse String
        </h1>
     
      </div>
      <div className="grid grid-cols-1 items-center justify-center gap-4 heropattern-bamboo-gray-300">
        <div className="grid w-full gap-4 p-4">
        <p className="w-full p-4 text-center bg-white col-span-1 rounded-lg shadow-lg">
          Write a function that reverses a string. The input string is given as
          an array of characters s. You must do this by modifying the input
          array in-place with O(1) extra memory.
        </p>
          
          <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-xl">
            <p className="font-bold">Algorithm</p>
            Use a head and a tail pointer to traverse the string. Swap the head
            and tail characters each time. Stop when the head passes the tail.
          </div>
          <div className="flex flex-col gap-2 p-4 bg-white shadow-lg rounded-xl">
            <h2 className="font-bold">String Input</h2>
            <input
              className="p-4 bg-blue-50"
              value={original}
              onChange={(e) => onInputChangeRequested(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-xl">
            <p className="font-bold">Controls</p>
            <div className="grid grid-cols-2 gap-4">
              <Button
                disabled={isComplete()}
                label="Swap"
                backgroundColor="blue"
                textColor="white"
                onClick={onSwapRequested}
              />
              <Button
                disabled={isComplete()}
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
          <div className="">
            <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-xl">
              <div className="flex flex-col">
                <h2 className="font-bold">Interactive</h2>
                {isComplete() && (
                  <p className="text-green-600">
                    Congrats! You reversed the string!
                  </p>
                )}
              </div>
              <div className="flex items-center justify-center gap-2">
                <p className="text-5xl">{"["}</p>
                {s &&
                  s.map((it, index) => (
                    <div className="flex flex-col">
                      <p
                        onAnimationEnd={() => setIsSwapping(false)}
                        className={`${
                          isSwapping && (index === head || index === tail)
                            ? "animate-fadeIn_half"
                            : ""
                        } p-4 whitespace-pre ${getCharColour(index)}`}
                      >
                        {'"' + it + '"'}
                      </p>
                    </div>
                  ))}

                <p className="text-5xl">{"]"}</p>
              </div>

              <div className="flex gap-4">
                {s.length > 0 && (
                  <h1 className="p-4 bg-green-300 w-max">Head</h1>
                )}
                {s.length > 0 && (
                  <h1 className="p-4 bg-yellow-300 w-max">Tail</h1>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 p-8 bg-white shadow-lg rounded-xl">
            <p className="font-bold">Resources</p>
            <a
              href="https://leetcode.com/problems/reverse-string/"
              className="text-blue-500 underline"
            >
              Leetcode #344
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
        </div>
      </div>
    </>
  );
}
