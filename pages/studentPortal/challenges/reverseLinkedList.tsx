import { ArrowRightIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Button } from "../../../components/ui/Button";

export default function EvaluateExpressionPage(props) {
  const linkedListProps = {
    head: {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null,
          },
        },
      },
    },
  };

  const [curr, setCurr] = useState(linkedListProps.head);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);
  const [step, setStep] = useState(1);

  const handleClick = () => {
    if (curr === null) {
      return;
    }

    if (step === 1) {
      setNext(curr.next);
      setStep(2);
    } else if (step === 2) {
      setCurr({
        value: curr.value,
        next: prev,
      });
      setStep(3);
    } else if (step === 3) {
      setPrev(curr);
      setCurr(next);
      setStep(1);
    }
  };

  const handleReset = () => {
    setCurr(linkedListProps.head);
    setPrev(null);
    setNext(null);
    setStep(1);
  };

  return (
    <div className="flex flex-col">
      <h1>Reverse a Linked List</h1>
      <LinkedList
        head={linkedListProps.head}
        current={curr?.value}
        next={next?.value}
        previous={prev?.value}
      />
      <div className="flex gap-8 my-8">
        <div className="flex flex-col">
          <p>Next</p>
          <LinkedList head={next} next={next?.value} />
        </div>
        <div className="flex flex-col">
          <p>Current</p>
          <LinkedList
            head={curr}
            current={curr?.value}
            next={next?.value}
            previous={prev?.value}
          />
        </div>
        <div className="flex flex-col">
          <p>Previous</p>
          <LinkedList head={prev} previous={prev?.value} />
        </div>
      </div>
      <Button label="Next" onClick={handleClick} />
      <p>
        {step === 1
          ? "Set Next Pointer"
          : step === 2
          ? "Reverse current node's next pointer"
          : step === 3
          ? "Advance pointers"
          : ""}
      </p>
      <Button label="Reset" onClick={handleReset} />
    </div>
  );
}

type LinkedListProps = {
  head: NodeProps;
  current?: number;
  previous?: number;
  next?: number;
};

const LinkedList = ({ head, current, next, previous }: LinkedListProps) => {
  if (head === null || head.value === null) {
    return (
      <div className="flex items-center justify-center w-16 h-16 bg-blue-400">
        Empty
      </div>
    );
  }
  return (
    <div className="">
      <Node
        value={head.value}
        next={head.next}
        currentPointer={current}
        nextPointer={next}
        previousPointer={previous}
      />
    </div>
  );
};

type NodeProps = {
  value: number;
  next: NodeProps | null;
  currentPointer?: number;
  nextPointer?: number;
  previousPointer?: number;
};
const Node = ({
  value,
  next,
  currentPointer,
  nextPointer,
  previousPointer,
}: NodeProps) => {
  if (value === null) {
    return (
      <div className="flex items-center justify-center w-16 h-16 bg-blue-400">
        Empty
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4 bg-blue-300">
      {value === currentPointer ? (
        <p className="flex items-center justify-center w-16 h-16 bg-orange-500">
          Curr: {value}
        </p>
      ) : value === nextPointer ? (
        <p className="flex items-center justify-center w-16 h-16 bg-purple-500">
          Next: {value}
        </p>
      ) : value === previousPointer ? (
        <p className="flex items-center justify-center w-16 h-16 bg-red-500">
          Prev: {value}
        </p>
      ) : (
        <p className="flex items-center justify-center w-16 h-16 bg-blue-500">
          {value}
        </p>
      )}
      <ArrowRightIcon className="w-6 h-6" />
      {next ? (
        <Node
          value={next.value}
          next={next.next}
          currentPointer={currentPointer}
          nextPointer={nextPointer}
          previousPointer={previousPointer}
        />
      ) : (
        <div className="flex items-center justify-center w-16 h-16 bg-blue-400">
          Empty
        </div>
      )}
    </div>
  );
};
