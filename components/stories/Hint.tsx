import { ReactNode, useState } from "react";
import { Skill } from "../../pages/api/skill";

export interface HintProps {
  skill: Skill;
  class?: string;
}

const Hint = ({ skill }: HintProps) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div className="bg-blue-100 heropattern-architect-blue-50 h-md">
      <img
        onClick={() => setVisibility(!visibility)}
        src="/images/brainHint.png"
        className="w-72 transform -translate-y-24 translate-x-4 "
      />
      {visibility && (
        <div className="overflow-y-scroll transform -translate-y-60 translate-x-72 rounded-lg shadow-2xl p-4 ring-4 ring-yellow-300 bg-gray-100 flex flex-start max-w-screen-md max-h-72 flex-col">
          <span>
            Hey, it's Mr.Brainy at your service! Let's work on this problem
            together shall we?
            <p className="font-bold text-yellow-700">
              Method 1: Counting with our fingers
            </p>
            Okay so let's start of with counting with our fingers since these
            are small numbers. For 5 + 3 let's start with 5 fingers up. If we
            put one finger up we get ... 6. If we put two fingers up we get ...
            7. And if we put three fingers up... TADA! We get 8!
            <br></br>
            But there still is another way!
            <br></br>
            <p className="font-bold text-purple-700">Method 2: Number Line</p>
            We can also use a number line to find the sum. We start from 5 on
            the number line and move three places to the right to land on 8.
            This is the sum.
          </span>
          <img src="/images/numberline.png" className="h-52" />
          <br></br>
          <p className="font-bold">
            Now try it out for your question. You got this Warrior!
          </p>
        </div>
      )}
    </div>
  );
};

export default Hint;
