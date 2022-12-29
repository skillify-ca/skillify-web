import { useState } from "react";
import ArrayIteration from "../../components/coding/dataStructures/ArrayIteration";
import Expression from "../../components/coding/dataStructures/Expression";
import HashMap from "../../components/coding/dataStructures/HashMap";
import FrogsOutput from "../../components/coding/minimumFrogs/FrogsOutput";
import { Button } from "../../components/ui/Button";
import CollapsibleCard from "../../components/ui/CollapsibleCard";
import { Input } from "../../components/ui/Input";

export default function Page() {
  return (
    <div className="flex flex-col">
      <h2 className="w-full text-3xl font-bold text-center">
        Minimum Number of Frogs Croaking
      </h2>
      <CollapsibleCard title={"Description"}>
        <p>
          Given the string croakOfFrogs, which represents a combination of the
          string "croak" from different frogs, that is, multiple frogs can croak
          at the same time, so multiple “croak” are mixed.
        </p>
        <p>
          Return the minimum number of different frogs to finish all the croak
          in the given string.
        </p>
        <p>
          A valid "croak" means a frog is printing 5 letters ‘c’, ’r’, ’o’, ’a’,
          ’k’ sequentially. The frogs have to print all five letters to finish a
          croak. If the given string is not a combination of valid "croak"
          return -1.
        </p>
      </CollapsibleCard>
      <CollapsibleCard title={"Examples"}>
        <div>
          <h4>Example 1:</h4>
          <p>Input: croakOfFrogs = "croakcroak"</p>
          <p> Output: 1 Explanation: One frog yelling "croak" twice.</p>
        </div>
        <div>
          <h4>Example 2:</h4>
          <p>Input: croakOfFrogs = "crcoakroak" </p>
          <p>Output: 2 </p>
          <p>
            Explanation: The minimum number of frogs is two. The first frog
            could yell "crcoakroak". The second frog could yell later
            "crcoakroak".
          </p>
        </div>
        <div>
          <h4>Example 3:</h4>
          <p>Input: croakOfFrogs = "croakcrook" </p>
          <p>Output: -1 </p>
          <p>
            Explanation: The given string is an invalid combination of "croak"
            from different frogs.
          </p>
        </div>
        <div>
          <h4>Example 4:</h4>
          <p> Input: croakOfFrogs = "croakcroa"</p>
          <p>Output: -1</p>
        </div>
      </CollapsibleCard>
      <CollapsibleCard title="Visualize">
        <VisualizeFrogsCroaking />
      </CollapsibleCard>
    </div>
  );
}

function VisualizeFrogsCroaking() {
  const [croakMap, setCroakMap] = useState(
    new Map<string, number>(
      Object.entries({
        c: 0,
        r: 0,
        o: 0,
        a: 0,
        k: 0,
      })
    )
  );

  const [input, setInput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stage, setStage] = useState<"input" | "process" | "output">("input");
  const [errorMessage, setErrorMessage] = useState("");

  const onStart = () => {
    setStage("process");
  };

  const onReturn = () => {
    if (!isValidInput()) {
      setErrorMessage("INPUT NOT VALID: UNFINISHED CROAKS");
    }
    setStage("output");
  };

  const onNext = () => {
    if (input.charAt(currentIndex) === "c") {
      if (croakMap.get("k") > 0) {
        croakMap.set("k", croakMap.get("k") - 1);
      }
      croakMap.set("c", croakMap.get("c") + 1);
    } else if ("croak".indexOf(input.charAt(currentIndex)) === -1) {
      setErrorMessage("INVALID INPUT: NON CROAK LETTER FOUND");
      setStage("output");
    } else {
      const currCharIndex = "croak".indexOf(input.charAt(currentIndex));
      const prevCharIndex = currCharIndex - 1;

      if (croakMap.get("croak".charAt(prevCharIndex)) <= 0) {
        setErrorMessage(
          "INVALID INPUT: A VALID CROAK WAS NOT STARTED. RETURN -1"
        );
        setStage("output");
      }
      // Decrement the previous croak stage
      croakMap.set(
        "croak".charAt(prevCharIndex),
        croakMap.get("croak".charAt(prevCharIndex)) - 1
      );

      // Increment the current croak stage
      croakMap.set(
        "croak".charAt(currCharIndex),
        croakMap.get("croak".charAt(currCharIndex)) + 1
      );
    }

    setCurrentIndex(currentIndex + 1);
  };
  const onReset = () => {
    setStage("input");
    setCurrentIndex(0);
    setErrorMessage("");
    setCroakMap(
      new Map<string, number>(
        Object.entries({
          c: 0,
          r: 0,
          o: 0,
          a: 0,
          k: 0,
        })
      )
    );
  };

  const isValidInput = () => {
    return (
      croakMap.get("c") +
        croakMap.get("r") +
        croakMap.get("o") +
        croakMap.get("a") ===
      0
    );
  };
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex gap-4">
          {stage === "process" && currentIndex < input.length && (
            <Button label="Next" onClick={onNext} />
          )}
          {stage === "process" && currentIndex === input.length && (
            <Button label="Return" onClick={onReturn} />
          )}
          {stage !== "input" && <Button label="Reset" onClick={onReset} />}
          {stage === "input" && <Button label="Start" onClick={onStart} />}
        </div>
      </div>
      {stage === "input" && (
        <div>
          <p>Input</p>
          <Input value={input} setValue={setInput} placeholder="Enter input" />
        </div>
      )}
      {stage === "process" && (
        <div>
          <div>
            <p>Input string: {input}</p>
            <ArrayIteration
              data={input.split("")}
              currentIndex={currentIndex}
            />
          </div>
          <div>
            <p>Current Index: {currentIndex}</p>
          </div>
          <div>
            <p>Croaks Map</p>
            <HashMap data={croakMap} />
          </div>
        </div>
      )}
      {stage === "output" && (
        <FrogsOutput errorMessage={errorMessage} croakMap={croakMap} />
      )}
    </div>
  );
}
