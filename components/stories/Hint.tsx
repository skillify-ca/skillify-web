import { ReactNode, useState } from "react";
import { Skill } from "../../pages/api/skill";

export interface HintProps {
  skill: Skill;
  class?: string;
}

const Hint = ({ skill }: HintProps) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div>
      <img
        onClick={() => setVisibility(!visibility)}
        src="/images/hint.png"
        className="w-40 h-30 flex flex-start"
      />
      {visibility && (
        <div className=" overflow-y-scroll transform -translate-y-36 translate-x-36 rounded-lg ring-4 ring-blue-200 bg-gray-400 text-white flex flex-start w-80 h-40 flex-col">
          <span>
            I'm your trusty Barbarian at service. Let's work on this problem
            together shall we?
            <p className="font-bold text-yellow-700">
              Method 1: Counting with our fingers
            </p>
            Okay so let's start of with counting with our fingers since these
            are small numbers. For 5 + 3 let's start with 5. If we put one
            finger down we get ... 6. If we put two finger down we get ... 7.
            And if we put three fingers down... TADA! We get 8!
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
