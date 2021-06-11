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
    switch (skill) {
      case Skill.ADDITION_SINGLE:
        hintTag = (
          <div className="overflow-y-scroll transform -translate-y-64 translate-x-72 rounded-lg shadow-2xl p-4 ring-4 ring-gray-500 bg-gray-100 flex flex-start max-w-screen-md max-h-72 flex-col">
            <span>
              Hey, it's Mr.Brainy at your service!
              <p> There are different methods to solving addition problem</p>
              <p className="font-bold text-yellow-700">
                Method 1: Counting with our fingers
              </p>
              Okay so let's start of with counting with our fingers since these
              are small numbers. For 5 + 3 let's start with 5 fingers up. If we
              put one finger up we get ... 6. If we put two fingers up we get
              ... 7. And if we put three fingers up... TADA! We get 8!
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
      case Skill.ADDITION_TRIPLE:
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
      case Skill.SUBTRACTION_SINGLE:
        hintTag = (
          <div className="overflow-y-scroll transform -translate-y-64 translate-x-72 rounded-lg shadow-2xl p-4 ring-4 ring-gray-500 bg-gray-100 flex flex-start max-w-screen-md max-h-72 flex-col">
            <span>
              Hey, it's Mr.Brainy at your service!
              <p>
                {" "}
                There are different methods to solving subtraction problems
              </p>
              <p className="font-bold text-yellow-700">
                Method 1: Counting with our fingers
              </p>
              Okay so let's start of with counting with our fingers since these
              are small numbers. For 5 - 3 let's start with 5 fingers up. If we
              put one finger down we get ... 4. If we put two fingers down we
              get ... 3. And if we put three fingers down... TADA! We get 2!
              <img
                src="https://sd41blogs.ca/dafoea/files/2020/04/Screen-Shot-2020-04-22-at-3.30.46-PM.png"
                className="h-52"
              />
              <br></br>
              But there still is another way!
              <br></br>
              <p className="font-bold text-purple-700">Method 2: Number Line</p>
              We can also use a number line to find the difference. We start
              from 6 on the number line and move 2 places to the left to land on
              4. This is the difference of 6 - 2.
            </span>
            <img
              src="http://smartvic.com/teacher/mdc/images/content/studentlearning/mathscontinuum/6minus2.gif"
              className="h-52"
            />
            <br></br>
            <p className="font-bold">
              Now try it out for your question. You got this Smarty!
            </p>
          </div>
        );
        break;
      case Skill.SUBTRACTION_DOUBLE:
        hintTag = (
          <div className="overflow-y-scroll transform -translate-y-64 translate-x-72 rounded-lg shadow-2xl p-4 ring-4 ring-gray-500 bg-gray-100 flex flex-start max-w-screen-md max-h-72 flex-col">
            <span>
              Hey, it's Mr.Brainy at your service!
              <p>
                {" "}
                There are different methods to solving double digit subtraction
                problem
              </p>
              <p className="font-bold text-yellow-700">
                Method 1: Adding the numbers by Coloumns
              </p>
              Okay let's start off with the method we're most familiar with
              which is arranging them on top of each other. Make sure you put
              the big number on top! Then we will subtract each coloumn and
              carry over the 1 from the next coloumn if the number on top is
              smaller than the number on the bottom. Let's look at an example
              together!
              <img
                src="https://cdn-skill.splashmath.com/panel-uploads/GlossaryTerm/8055a22882f04a5a8bf2daa477ed4e9e/1564724604_uses-of-subtraction-with-regrouping-e1.png"
                className="h-52"
              ></img>
              So here we can see that we are trying to figure out what's 50 -
              47. So we first subtract 0 - 7... Oh wait we can't do that because
              0 is smaller than 7 so we borrow the one from the tens coloumn. So
              now we do 10 - 7 which is 3. We know have 4 in the tens coloumn.
              We do 4 - 4 and that's super duper easy! We get 0. And our final
              answer is 3! That's a pretty cool trick if I say so myself.{" "}
              <strong> But there's still another way!</strong>
              <br></br>
              <br></br>
              <p className="font-bold text-purple-700">Method 2: Number Line</p>
              We can also use a number line to find the difference of numbers.
              In this example, we start from 78 on the number line. Remeber we
              are trying to figure out what is 78 - 41. Now since we know our
              10s countings very well we will subtract by 10s. We both know
              there are 4 tens in 40. So we must subtract 10 4 times from 78.
              First time subtracting 10 from 78 we get 68. then we do 68 - 10..
              We get 58. Now we do 58 - 10 and we get 48.. We still have to
              subtract 1 more 10, so we do 48 - 10 and we get 38... But we can't
              forget about the 1 in 41!! Our final step is the subtract 38 -
              1... And our Final answer is... 37!! So we found out that 78 - 41
              = 37! Great job!
            </span>

            <img
              src="https://media.nagwa.com/295158982161/en/thumbnail_l.jpeg"
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
      case Skill.SUBTRACTION_TRIPLE:
        hintTag = (
          <div className="overflow-y-scroll transform -translate-y-64 translate-x-72 rounded-lg shadow-2xl p-4 ring-4 ring-gray-500 bg-gray-100 flex flex-start max-w-screen-md max-h-72 flex-col">
            Hey, it's Mr.Brainy at your service!
            <p>
              {" "}
              There are different methods to solving triple digit subtraction
              problem
            </p>
            <p className="font-bold text-yellow-700">
              Method 1: Adding the numbers by Coloumns
            </p>
            Okay let's start off with the method we're most familiar with which
            is arranging them on top of each other. Make sure you put the big
            number on top! Then we will subtract each coloumn and carry over the
            1 from the next coloumn if the number on top is smaller than the
            number on the bottom. Let's look at an example together!
            <img
              src="https://ichef.bbci.co.uk/images/ic/1280xn/p08pt1qb.png"
              className="h-52"
            ></img>
            So here we can see that we are trying to figure out what's 343 -
            237. So we first subtract the ones coloumn which is 3 - 7. But wait!
            We can't do that becasue 3 is less then 7 so we borrow the one from
            the tens coloumn and the 3 now becomes 13 and we all know that 13 is
            greater than 7. 13 - 7 is 6 so we put 6 in the ones coloumn. Now we
            do 3 - 3 which is 0 and we put the zero in the tens coloumn. Our
            final step is to subtract the hendreds coloumn so we do 3 - 2 which
            is equal to 1. So we will combine all of this together and our final
            answer is... Drum Roll Please... 106! So we can now say that 343 -
            237 = 106!
            <strong> But there's still another way!</strong>
            <br></br>
            <br></br>
            <br></br>
            <p className="font-bold">
              You now have a diagram to solve the problem so give it a shot! You
              got this Smarty!
            </p>
          </div>
        );
        break;
      default: {
        <p>Hello I'm Brainy</p>;
        break;
      }
    }
    return hintTag;
  };
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
