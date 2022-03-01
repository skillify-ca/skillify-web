import { Skill } from "../../../pages/api/skill";

export const getHintForUnit = (skill: Skill) => {
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
            Okay let's start off with the method we're most familiar with which
            is arranging them on top of each other. Then we will add each
            coloumn together and carry over the 1 if the number goes over 10.
            Let's look at an example together!
            <img
              src="https://raw.githubusercontent.com/qknow/images/gh-pages/primary/MATHS/CLASS%203/numbers%20and%20numerals/ADDTION%20-%202DIGITS.png"
              className="h-52"
            ></img>
            So here we can see that we are trying to figure out what's 79 + 18.
            So we first add 8 + 9 in the ones coloumn and get 17 we leave the 7
            and take the one over to the tens coloumn. Step 2 is add the 7 and 1
            which is 8 and we cant forget the 1 we carried over from before!! So
            8 + 1 is 9. And our final answer is 97! That's a pretty cool trick
            if I say so myself. <strong> But there's still another way!</strong>
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
            You now have 2 ways to solve the problem so give it a shot! You got
            this Smarty!
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
            Okay let's start off with the method we're most familiar with which
            is arranging them on top of each other. Then we will add each
            coloumn together and carry over the 1 over to the next coloumn if
            the number goes over 10. Let's look at an example together!
            <img
              src="https://raw.githubusercontent.com/qknow/images/gh-pages/primary/MATHS/CLASS%203/numbers%20and%20numerals/ADDTION%20-%203DIGITS1.png"
              className="h-52"
            ></img>
            So here we can see that we are trying to figure out what's 536 +
            385. So we first add 6 + 5 in the ones coloumn and we get 11 we
            leave the 1 and take the otehr 1 over to the tens coloumn. Step 2 is
            add the 3 and 8 which is 11 and we cant forget the 1 we carried over
            from before!! So 11 + 1 is 12. So we leave the 2 in the tens coloumn
            and carry over the 1 to the hundreds coloumn. Final step is to add
            the 5 and 3 which is 8 and we can't foget about the 1 we carried
            over from the tens coloumn... So what's 8 + 1.. You guessed it, it's
            9! Our final answer for 536 + 385 is 921!!{" "}
            <strong> But there's still another way!</strong>
            <br></br>
            <br></br>
            <p className="font-bold text-purple-700">Method 2: Number Line</p>
            We can also use a number line to find the sum. In this example, we
            start from 234 on the number line. Start off by splitting the second
            into it's ones, tens, and hundreds to make counting easier. Now from
            234 we will add 100 and we get 334. Now we will add 30 to 334 and we
            will get 364. Now, for our final step we will add the 5 and our
            final answer is... Drum Roll Please... 371! Awesome job!
          </span>

          <img
            src="https://showme0-9071.kxcdn.com/files/566531/pictures/thumbs/1411270/last_thumb1393084207.jpg"
            className="h-75"
          />
          <br></br>
          <p className="font-bold">
            You now have 2 ways to solve the problem so give it a shot! You got
            this Smarty!
          </p>
        </div>
      );
      break;
    case Skill.SUBTRACTION_SINGLE:
      hintTag = (
        <div className="overflow-y-scroll transform -translate-y-64 translate-x-72 rounded-lg shadow-2xl p-4 ring-4 ring-gray-500 bg-gray-100 flex flex-start max-w-screen-md max-h-72 flex-col">
          <span>
            Hey, it's Mr.Brainy at your service!
            <p> There are different methods to solving subtraction problems</p>
            <p className="font-bold text-yellow-700">
              Method 1: Counting with our fingers
            </p>
            Okay so let's start of with counting with our fingers since these
            are small numbers. For 5 - 3 let's start with 5 fingers up. If we
            put one finger down we get ... 4. If we put two fingers down we get
            ... 3. And if we put three fingers down... TADA! We get 2!
            <img
              src="https://sd41blogs.ca/dafoea/files/2020/04/Screen-Shot-2020-04-22-at-3.30.46-PM.png"
              className="h-52"
            />
            <br></br>
            But there still is another way!
            <br></br>
            <p className="font-bold text-purple-700">Method 2: Number Line</p>
            We can also use a number line to find the difference. We start from
            6 on the number line and move 2 places to the left to land on 4.
            This is the difference of 6 - 2.
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
              Method 1: Subtracting the numbers by Coloumns
            </p>
            Okay let's start off with the method we're most familiar with which
            is arranging them on top of each other. Make sure you put the big
            number on top! Then we will subtract each coloumn and carry over the
            1 from the next coloumn if the number on top is smaller than the
            number on the bottom. Let's look at an example together!
            <img
              src="https://cdn-skill.splashmath.com/panel-uploads/GlossaryTerm/8055a22882f04a5a8bf2daa477ed4e9e/1564724604_uses-of-subtraction-with-regrouping-e1.png"
              className="h-52"
            ></img>
            So here we can see that we are trying to figure out what's 50 - 47.
            So we first subtract 0 - 7... Oh wait we can't do that because 0 is
            smaller than 7 so we borrow the one from the tens coloumn. So now we
            do 10 - 7 which is 3. We know have 4 in the tens coloumn. We do 4 -
            4 and that's super duper easy! We get 0. And our final answer is 3!
            That's a pretty cool trick if I say so myself.{" "}
            <strong> But there's still another way!</strong>
            <br></br>
            <br></br>
            <p className="font-bold text-purple-700">Method 2: Number Line</p>
            We can also use a number line to find the difference of numbers. In
            this example, we start from 78 on the number line. Remeber we are
            trying to figure out what is 78 - 41. Now since we know our 10s
            countings very well we will subtract by 10s. We both know there are
            4 tens in 40. So we must subtract 10 4 times from 78. First time
            subtracting 10 from 78 we get 68. then we do 68 - 10.. We get 58.
            Now we do 58 - 10 and we get 48.. We still have to subtract 1 more
            10, so we do 48 - 10 and we get 38... But we can't forget about the
            1 in 41!! Our final step is the subtract 38 - 1... And our Final
            answer is... 37!! So we found out that 78 - 41 = 37! Great job!
          </span>
          <img
            src="https://media.nagwa.com/295158982161/en/thumbnail_l.jpeg"
            className="h-75"
          />
          <br></br>
          <p className="font-bold">
            You now have 2 ways to solve the problem so give it a shot! You got
            this Smarty!
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
            Method 1: Subtracting the numbers by Coloumns
          </p>
          Okay let's start off with the method we're most familiar with which is
          arranging them on top of each other. Make sure you put the big number
          on top! Then we will subtract each coloumn and carry over the 1 from
          the next coloumn if the number on top is smaller than the number on
          the bottom. Let's look at an example together!
          <img
            src="https://ichef.bbci.co.uk/images/ic/1280xn/p08pt1qb.png"
            className="h-52"
          ></img>
          So here we can see that we are trying to figure out what's 343 - 237.
          So we first subtract the ones coloumn which is 3 - 7. But wait! We
          can't do that becasue 3 is less then 7 so we borrow the one from the
          tens coloumn and the 3 now becomes 13 and we all know that 13 is
          greater than 7. 13 - 7 is 6 so we put 6 in the ones coloumn. Now we do
          3 - 3 which is 0 and we put the zero in the tens coloumn. Our final
          step is to subtract the hendreds coloumn so we do 3 - 2 which is equal
          to 1. So we will combine all of this together and our final answer
          is... Drum Roll Please... 106! So we can now say that 343 - 237 = 106!
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
    case Skill.EQUAL_SHARING_8_ITEMS:
      hintTag = (
        <div className="overflow-y-scroll transform -translate-y-64 translate-x-72 rounded-lg shadow-2xl p-4 ring-4 ring-gray-500 bg-gray-100 flex flex-start max-w-screen-md max-h-72 flex-col">
          Hey, it's Mr.Brainy at your service!
          <p> There are different methods to solving Equal Sharing Problems</p>
          <p className="font-bold text-yellow-700">
            Method 1: Count the Groups and Count all Items
          </p>
          So in the picture below we can see that we have 3 friends so that
          means we have 3 groups! But let's count how many sweets we have in
          total. So let's see since we have 3 friends and each friend has 5
          sweets we can figure out how many sweets we have in total by doing 5 +
          5 + 5. And now we knwo that we have 15 sweets in total!
          <img
            src="https://www.theschoolrun.com/sites/theschoolrun.com/files/article_images/sharing_method_for_division.png"
            className="h-52"
          ></img>
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
    case Skill.DIVIDE_12_EQUALLY:
      hintTag = (
        <div className="overflow-y-scroll transform -translate-y-64 translate-x-72 rounded-lg shadow-2xl p-4 ring-4 ring-gray-500 bg-gray-100 flex flex-start max-w-screen-md max-h-72 flex-col">
          Hey, it's Mr.Brainy at your service!
          <p> There are different methods to solving Long Division Questions</p>
          <p className="font-bold text-yellow-700">
            Method 1: Count the Groups and Count all Items
          </p>
          Getting started One of the problems students have with long division
          problems is remembering all the steps. Here’s a trick to mastering
          long division. Use the acronym DMSB, which stands for:
          <ul>
            <li>D = Divide</li>
            <li>M = Multiply</li>
            <li>S = Subtract</li>
            <li>B = Bring down</li>
          </ul>
          This sequence of letters can be hard to remember, so think of the
          acronym in the context of a family: Dracula, Must, Siuck, Blood. Write
          D M S B in the corner of your worksheet to remember it's your best
          friend!
          <strong>So let's do 65 ÷ 5</strong>
          <h1>Step 1: D for Division</h1>
          How many times will 5 go into 65? That’s too hard to work out in your
          head, so let’s break it down into smaller steps. The first problem
          you’ll work out in this equation is how many times can you divide 5
          into 6. The answer is 1. So you put 1 on the quotient line.
          <img
            src="https://www.k5learning.com/sites/all/files/long-division-3.gif"
            className="h-75 w-1/3"
          ></img>
          <h1>Step 2: M for Multiply</h1>
          You multiply your answer from step 1 and your divisor: 1 x 5 = 5. You
          write 5 under the 6.
          <img
            src="https://www.k5learning.com/sites/all/files/long-division-4.gif"
            className="h-75 w-1/3"
          ></img>
          <h1>Step 3: S for Subtract</h1>
          Next you subtract. In this case it will be 6 – 5 = 1.
          <img
            src="https://www.k5learning.com/sites/all/files/long-division-5.gif"
            className="h-75 w-1/3"
          ></img>
          <h1>Step 4: B for Bring Down</h1>
          The last step in the sequence is to bring down the next number from
          the dividend, which in this case is 5. You write the 5 next to the 1,
          making the number 15.
          <img
            src="https://www.k5learning.com/sites/all/files/long-division-6.gif"
            className="h-75 w-1/3"
          ></img>
          Now repeat the steps:
          <h1>Step 1: D for Division</h1>
          How many times can you divide 5 into 15. The answer is 3. So you put 3
          on the quotient line.
          <img
            src="https://www.k5learning.com/sites/all/files/long-division-7.gif"
            className="h-75 w-1/3"
          ></img>
          <h1>Step 2: M for Multiply</h1>
          You multiply your answer from step 1 and your divisor: 3 x 5 = 15.
          Write this underneath the 15.
          <img
            src="https://www.k5learning.com/sites/all/files/long-division-8.gif"
            className="h-75 w-1/3"
          ></img>
          <h1>Step 3: S for Subtract</h1>
          Now we subtract 15 from 15. 15 – 15 = 0.
          <img
            src="https://www.k5learning.com/sites/all/files/long-division-9.gif"
            className="h-75 w-1/3"
          ></img>
          <p>
            And now you're done! Awesome work! And always remember <b>D</b>
            racula <b>M</b>ust <b>S</b>uck <b>B</b>lood
          </p>
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
    case Skill.DIVIDE_100:
      hintTag = (
        <div className="overflow-y-scroll transform -translate-y-64 translate-x-72 rounded-lg shadow-2xl p-4 ring-4 ring-gray-500 bg-gray-100 flex flex-start max-w-screen-md max-h-72 flex-col">
          Hey, it's Mr.Brainy at your service!
          <p>
            {" "}
            There are different methods to solving Long Division Questions
            problem
          </p>
          <p className="font-bold text-yellow-700">
            Method 1: Count the Groups and Count all Items
          </p>
          Getting started One of the problems students have with long division
          problems is remembering all the steps. Here’s a trick to mastering
          long division. Use the acronym DMSB, which stands for:
          <ul>
            <li>D = Divide</li>
            <li>M = Multiply</li>
            <li>S = Subtract</li>
            <li>B = Bring down</li>
          </ul>
          This sequence of letters can be hard to remember, so think of the
          acronym in the context of a family: Dracula, Must, Siuck, Blood. Write
          D M S B in the corner of your worksheet to remember it's your best
          friend!
          <strong>So let's do 65 ÷ 5</strong>
          <h1>Step 1: D for Division</h1>
          How many times will 5 go into 65? That’s too hard to work out in your
          head, so let’s break it down into smaller steps. The first problem
          you’ll work out in this equation is how many times can you divide 5
          into 6. The answer is 1. So you put 1 on the quotient line.
          <img
            src="https://www.k5learning.com/sites/all/files/long-division-3.gif"
            className="h-52"
          ></img>
          <h1>Step 2: M for Multiply</h1>
          You multiply your answer from step 1 and your divisor: 1 x 5 = 5. You
          write 5 under the 6.
          <img
            src="https://www.k5learning.com/sites/all/files/long-division-4.gif"
            className="h-52"
          ></img>
          <h1>Step 3: S for Subtract</h1>
          Next you subtract. In this case it will be 6 – 5 = 1.
          <img
            src="https://www.k5learning.com/sites/all/files/long-division-5.gif"
            className="h-52"
          ></img>
          <h1>Step 4: B for Bring Down</h1>
          The last step in the sequence is to bring down the next number from
          the dividend, which in this case is 5. You write the 5 next to the 1,
          making the number 15.
          <img
            src="https://www.k5learning.com/sites/all/files/long-division-6.gif"
            className="h-52"
          ></img>
          Now repeat the steps:
          <h1>Step 1: D for Division</h1>
          How many times can you divide 5 into 15. The answer is 3. So you put 3
          on the quotient line.
          <img
            src="https://www.k5learning.com/sites/all/files/long-division-7.gif"
            className="h-52"
          ></img>
          <h1>Step 2: M for Multiply</h1>
          You multiply your answer from step 1 and your divisor: 3 x 5 = 15.
          Write this underneath the 15.
          <img
            src="https://www.k5learning.com/sites/all/files/long-division-8.gif"
            className="h-52"
          ></img>
          <h1>Step 3: S for Subtract</h1>
          Now we subtract 15 from 15. 15 – 15 = 0.
          <img
            src="https://www.k5learning.com/sites/all/files/long-division-9.gif"
            className="h-52"
          ></img>
          And now you're done! Awesome work!
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
    case Skill.EQUAL_GROUP_10_ITEMS:
      hintTag = (
        <div className="overflow-y-scroll transform -translate-y-64 translate-x-72 rounded-lg shadow-2xl p-4 ring-4 ring-gray-500 bg-gray-100 flex flex-start max-w-screen-md max-h-72 flex-col">
          Hey, it's Mr.Brainy at your service!
          <p>
            {" "}
            There are different methods to solving Equal Grouping Problem, but
            here's one way!
          </p>
          <p className="font-bold text-yellow-700">
            Method 1: Count the Groups then Count Inside the Groups
          </p>
          So in the picture below we can see that we have a beautiful picture of
          groups of apples! Let's first count how many groups there are so we
          can see there is not 1... not 2... But 3 groups of apples! Now let's
          count inside the circle. Hmmm it looks like we have 1..2..3..4 apples
          in each circle. Finally we can say that we have 3 groups of 4 apples!
          <img
            src="https://mathskills4kids.com/content/images/three-groups-of-four-apples.png"
            className="h-52"
          ></img>
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
    case Skill.MULTIPLICATION_5:
      hintTag = (
        <div className="overflow-y-scroll transform -translate-y-64 translate-x-72 rounded-lg shadow-2xl p-4 ring-4 ring-gray-500 bg-gray-100 flex flex-start max-w-screen-md max-h-72 flex-col">
          Hey, it's Mr.Brainy at your service!
          <p>
            {" "}
            There are different methods to solving Multiplication problems, but
            here's one way!
          </p>
          <p className="font-bold text-yellow-700">
            Method 1: Repeated Addition
          </p>
          The Multiplication may sound new to many of us but here's a secret.
          It's actually just repeated addition... Let's take the picture below
          as an example. We see that we are doing 5 x 3. But all that really
          means is we have to add 3 five times so it looks something like this.
          3 + 3 + 3 + 3 + 3 and we know that is equal to 15. So 5 x 3 is 15!
          Great job Smarty!
          <img
            src="https://www.assignmentpoint.com/wp-content/uploads/2017/08/qwe.jpg"
            className="h-52"
          ></img>
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
    case Skill.MULTIPLICATION_10:
      hintTag = (
        <div className="overflow-y-scroll transform -translate-y-64 translate-x-72 rounded-lg shadow-2xl p-4 ring-4 ring-gray-500 bg-gray-100 flex flex-start max-w-screen-md max-h-72 flex-col">
          Hey, it's Mr.Brainy at your service!
          <p>
            {" "}
            There are different methods to solving Multiplication problems, but
            here's one way!
          </p>
          <p className="font-bold text-yellow-700">
            Method 1: Repeated Addition
          </p>
          The Multiplication may sound new to many of us but here's a secret.
          It's actually just repeated addition... Let's take the picture below
          as an example. We see that we are doing 5 x 3. But all that really
          means is we have to add 3 five times so it looks something like this.
          3 + 3 + 3 + 3 + 3 and we know that is equal to 15. So 5 x 3 is 15!
          Great job Smarty!
          <img
            src="https://www.assignmentpoint.com/wp-content/uploads/2017/08/qwe.jpg"
            className="h-52"
          ></img>
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
      <p>Alternative Unit</p>;
      break;
    }
  }
  return hintTag;
};
