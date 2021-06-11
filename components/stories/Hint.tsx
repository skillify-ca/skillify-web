import { ReactNode, useState } from "react";
import { Skill } from "../../pages/api/skill";

export interface HintProps {
  skill: Skill;
  class?: string;
}

const Hint = ({ skill }: HintProps) => {
  const [visibility, setVisibility] = useState(false);
  const getHintForTopic = (skill: Skill) => {
    let hintTag;
    console.log(skill);
    switch (skill) {
      case Skill.ADDITION_SINGLE:
        hintTag = (
          <div className="overflow-y-scroll transform -translate-y-64 translate-x-72 rounded-lg shadow-2xl p-4 ring-4 ring-gray-500 bg-gray-100 flex flex-start max-w-screen-md max-h-72 flex-col">
            <span>
              Hey, it's Mr.Brainy at your service!
              <p>
                {" "}
                There are different methods to solving double digit addition
                problem
              </p>
              <p className="font-bold text-yellow-700">
                Method 1: Adding the numbers by Coloumns
              </p>
              Okay let's start off with the method we're most familiar with
              which is arranging them on top of each other. Then we will add
              each coloumn together and carry over the 1 if the number goes over
              10.
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
              Now try it out for your question. You got this Smarty!
            </p>
          </div>
        );
        break;
      case Skill.ADDITION_DOUBLE:
        hintTag = (
          <div className="overflow-y-scroll transform -translate-y-64 translate-x-72 rounded-lg shadow-2xl p-4 ring-4 ring-gray-500 bg-gray-100 flex flex-start max-w-screen-md max-h-72 flex-col">
            <span>
              Hey, it's Mr.Brainy at your service!
              <p>
                {" "}
                There are different methods to solving double digit addition
                problem
              </p>
              <p className="font-bold text-yellow-700">
                Method 1: Adding the numbers by Coloumns
              </p>
              Okay let's start off with the method we're most familiar with
              which is arranging them on top of each other. Then we will add
              each coloumn together and carry over the 1 if the number goes over
              10. Let's look at an example together!
              <img
                src="https://raw.githubusercontent.com/qknow/images/gh-pages/primary/MATHS/CLASS%203/numbers%20and%20numerals/ADDTION%20-%202DIGITS.png"
                className="h-52"
              ></img>
              So here we can see that we are trying to figure out what's 79 +
              18. So we first add 8 + 9 in the ones coloumn and get 17 we leave
              the 7 and take the one over to the tens coloumn. Step 2 is add the
              7 and 1 which is 8 and we cant forget the 1 we carried over from
              before!! So 8 + 1 is 9. And our final answer is 97! That's a
              pretty cool trick if I say so myself.{" "}
              <strong> But there's still another way!</strong>
              <br></br>
              <br></br>
              <p className="font-bold text-purple-700">Method 2: Number Line</p>
              We can also use a number line to find the sum. In this example, we
              start from 24 on the number line. Now since we know our 10s
              countings very well we will add a whole 10 so now we are at 34 but
              we still have 3 left over... So will will now add the 3 to 34 and
              our final answer is... Drum Roll Please... 37!
            </span>

            <img
              src="https://showme0-9071.kxcdn.com/files/1000297181/pictures/thumbs/2428163/last_thumb1470064539.jpg"
              className="h-75"
            />
            <br></br>
            <p className="font-bold">
              You now have 2 ways to solve the problem so give it a shot! You
              got this Smarty!
            </p>
          </div>
        );
        break;
      default:
        hintTag = (
          <div className="overflow-y-scroll transform -translate-y-64 translate-x-72 rounded-lg shadow-2xl p-4 ring-4 ring-gray-500 bg-gray-100 flex flex-start max-w-screen-md max-h-72 flex-col">
            <span>
              Hey, it's Mr.Brainy at your service!
              <p>
                {" "}
                There are different methods to solving triple digit addition
                problem
              </p>
              <p className="font-bold text-yellow-700">
                Method 1: Adding the numbers by Coloumns
              </p>
              Okay let's start off with the method we're most familiar with
              which is arranging them on top of each other. Then we will add
              each coloumn together and carry over the 1 over to the next
              coloumn if the number goes over 10. Let's look at an example
              together!
              <img
                src="https://raw.githubusercontent.com/qknow/images/gh-pages/primary/MATHS/CLASS%203/numbers%20and%20numerals/ADDTION%20-%203DIGITS1.png"
                className="h-52"
              ></img>
              So here we can see that we are trying to figure out what's 536 +
              385. So we first add 6 + 5 in the ones coloumn and we get 11 we
              leave the 1 and take the otehr 1 over to the tens coloumn. Step 2
              is add the 3 and 8 which is 11 and we cant forget the 1 we carried
              over from before!! So 11 + 1 is 12. So we leave the 2 in the tens
              coloumn and carry over the 1 to the hundreds coloumn. Final step
              is to add the 5 and 3 which is 8 and we can't foget about the 1 we
              carried over from the tens coloumn... So what's 8 + 1.. You
              guessed it, it's 9! Our final answer for 536 + 385 is 921!!{" "}
              <strong> But there's still another way!</strong>
              <br></br>
              <br></br>
              <p className="font-bold text-purple-700">Method 2: Number Line</p>
              We can also use a number line to find the sum. In this example, we
              start from 234 on the number line. Start off by splitting the
              second into it's ones, tens, and hundreds to make counting easier.
              Now from 234 we will add 100 and we get 334. Now we will add 30 to
              334 and we will get 364. Now, for our final step we will add the 5
              and our final answer is... Drum Roll Please... 371! Awesome job!
            </span>

            <img
              src="https://showme0-9071.kxcdn.com/files/566531/pictures/thumbs/1411270/last_thumb1393084207.jpg"
              className="h-75"
            />
            <br></br>
            <p className="font-bold">
              You now have 2 ways to solve the problem so give it a shot! You
              got this Smarty!
            </p>
          </div>
        );
        break;
    }
    return hintTag;
  };
  console.log(skill);
  return (
    <div>
      <img
        onClick={() => setVisibility(!visibility)}
        src="/images/brainHint.png"
        className="w-72 transform -translate-y-24 translate-x-4 "
      />
      {visibility && getHintForTopic(skill)}
    </div>
  );
};

export default Hint;
