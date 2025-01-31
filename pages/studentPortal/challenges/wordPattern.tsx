import React, { useState } from "react";

export default function WordPattern(props) {
  const onResetRequested = () => {
    setIndex(0);
    setDictionary(new Map());
    setResult(undefined);
    setIsComplete(false);
    setMessage("");
  };
  const words = () => {
    if (str.length === 0) return [];
    return str.split(" ");
  };

  const onAdvanceRequested = () => {
    if (index === pattern.length - 1) {
      setIsComplete(true);
      setResult(true);
      setMessage(
        "You got to the end of the string, so the pattern match this list of words. Congrats!"
      );
    } else {
      setIndex(index + 1);
    }
  };

  const onCheckDictionaryRequested = () => {
    const c = dictionary.get(pattern.charAt(index));
    const word = dictionary.get(words()[index]);

    if (c !== word) {
      if (c === undefined) {
        setMessage(
          "The word is already in the dictionary with a different character value. The pattern does not match."
        );
      }
      if (word === undefined) {
        setMessage(
          "The character is already in the dictionary with a different word value. The pattern does not match."
        );
      }
    } else {
      if (c === undefined && word === undefined) {
        setMessage(
          "Dictionary doesn't contain current character or word. It is safe to add both to the dictionary."
        );
      } else {
        setMessage(
          "The character and word are mapped to each other already in the dictionary. It is safe to continue."
        );
      }
    }
  };

  const onSetDictionaryRequested = () => {
    const c = dictionary.get(pattern.charAt(index));
    const word = dictionary.get(words()[index]);
    setMessage("");
    if (c === undefined && word === undefined) {
      const newDictionary = new Map(dictionary);
      newDictionary.set(pattern.charAt(index), index);
      newDictionary.set(words()[index], index);
      setDictionary(newDictionary);
    }
  };

  const onClearRequested = () => {
    setPattern("");
    setStr("");
    setDictionary(new Map());
    setIndex(0);
    setResult(undefined);
    setIsComplete(false);
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
          For this assignment you will need to be familiar with the PokeAPI.
          When battling an opponent in Pokemon, it's important to use Pokemon
          types that will be useful in battle. In this assignment, you will
          create a React component that will allow a user to create a list of
          Pokemon types and a list of Pokemon. The user will then be able to
          check if the list of Pokemon match the list of specified Pokemon
          types. The order of the Pokemon types and Pokemon matters. If the list
          of Pokemon types match the list of Pokemon, the user will see a
          success message. If the list of Pokemon types do not match the list of
          Pokemon, the user will see an error message. This particular trainer
          has an odd request. They do not want to have different Pokemon on
          their that share the same type.
        </p>
        <p>
          Examples of a passing team:
          <ul>- 6 Pikachus</ul>
          <ul> - 5 Charizards and 1 Blastoise </ul>
          <ul>
            - 1 Charizard, 1 Blastoise, 1 Vulpix, 1 Gengar, 1 Pikachu, 1
            Bulbsaur
          </ul>
        </p>
        <p>
          Examples of a failing team:
          <ul>- 5 Pikachus and 1 Raichu</ul>
          <ul>- 4 Charizards, 1 Blastoise and 1 Vulpix</ul>
        </p>
        <ul>
          <li>
            Step 1. Create a React component that allows a user to create a list
            of 6 Pokemon types. Duplicates are allowed.{" "}
          </li>
          <li>
            Step 2. Create a React component that allows a user to create a list
            of 6 Pokemon. Duplicates are allowed.{" "}
          </li>
          <li>
            Step 3. Show a success or error message if the list of Pokemon types
            match the list of Pokemon. The order matters!
          </li>
        </ul>
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
            Iterate through the list of Pokemon types and build up a
            map/dictionary of key-value pairs. Save both the current Pokemon
            Type and the current word in the dictionary along with the current
            index.
          </div>
        </div>
      </div>
    </>
  );
}
