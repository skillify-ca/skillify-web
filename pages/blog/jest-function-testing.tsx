import React from "react";
import CodeBlock from "../../components/coding/blog/CodeBlock";
import PostLayout from "../../components/coding/blog/PostLayout";
import SEO from "../../components/SEO";

export default function Page() {
  return (
    <div>
      <SEO
        title={
          "Jest + Function Testing:  A Creative & Cheap Approach to Testing Tailwind/CSS Classes"
        }
        description={
          "We explain how jest unit testing can be used to test Tailwind/CSS classes"
        }
        image={"/images/blog/jest-function-testing/software_testing.jpeg"}
      />
      <div className="space-y-4 mb-4">
        <h1 className="text-4xl font-thin">
          Jest + Function Testing: A Creative & Cheap Approach to Testing
          Tailwind/CSS Classes
        </h1>
        <h2 className="font-thin italic">By: Kari Wiedenhaupt</h2>
      </div>
      <div className="space-y-4">
        <p>
          {" "}
          Sometimes there’s no way around it. End-to-end testing with a tool
          like Cypress is necessary to ensure your UI features work as expected
          and don’t break down when changes/updates are made to your code. But
          end-to-end tests are costly in processing power and runtime. Is there
          another way to test business critical UI without end-to-end-tests?
          This article describes a creative approach to ensuring your
          Tailwind/CSS styles display as intended. Sometimes you can ensure your
          UI is well tested with a few simple and inexpensive unit tests.
        </p>
        <p>
          Let’s take a look at the Jest + Function approach to UI testing in
          action. I work at the edtech startup, Skillify, and as part of their
          coaching program, students are required to set regular goals that are
          shared with the instructors in order to help students track their
          progress. My responsibility over the past month was to ship this
          feature and ensure the code was well protected with tests.
        </p>
        <p>
          This is how the goals feature appears for instructors and students
          after they navigate to the goals section on the student web portal.
        </p>
        <div className="flex items-center">
          <img
            src={"/images/blog/jest-function-testing/goalTesting.png"}
            className="w-full  "
          />
        </div>
        <p>
          Here students can set “Goals” and choose the “Target Dates” by which
          they intend to finish them. The “Days Remaining” column takes the
          “Target Date” column and subtracts the current date, giving the user a
          quick visual of the number of days they have left to complete the goal
          by the target date. Sweet and simple! Goals can also be archived or
          completed by the user. And to enhance user experience – goal tracking
          at a glance, as I like to call it – is the UI{" "}
          <span className="bg-red-500">red</span>-
          <span className="bg-yellow-500">yellow</span>-clear highlighting
          feature I am testing with jest. Only current goals are intended to be
          included in this highlighting; and goals with less than 0 days
          remaining should be <span className="bg-red-500">RED</span>, goals
          with 1-3 days remaining <span className="bg-yellow-500">YELLOW</span>,
          and goals with +3 days remaining NOT HIGHLIGHTED.
        </p>
        <p>
          This highlighting functionality was business critical and it was
          important to create tests to protect this feature from ever breaking
          in production.
        </p>
        <p>
          I query a list of user goals from our GraphQL API and pass each goal
          in the list through a function called returnGoalStyle. Goals have
          various properties like Title, Date Added, and Target Completion Date.
          It is based off of the Target Completion Date that we conditionally
          highlight the goal with Tailwind classes.
        </p>
        <p>
          How can I test that the correct colour is used for a specific goal?
          How can I validate this behaviour in fast-to-run unit tests, vs slower
          end-to-end tests?
        </p>
        <p>
          Since a goal that is due in 3 days should be highlighted in yellow, I
          created a string variable that represented the tailwind classes for a
          yellow background.
        </p>
        <p>
          More specifically I wrote tests that ensure that the styles of the
          goals contained the tailwind class `bg-yellow-300`. Checking for the
          existence of a string inside a unit test is so much faster than having
          to spin up an entire end-to-end test to verify that a
          {JSON.stringify("<div>")} element has a yellow background.
        </p>
        <p>
          The full returnGoalStyle function I attached in the End Notes for
          additional context and your full viewing pleasure!
        </p>
        <h2 className="text-3xl font-thin">
          Give it to me straight. What’s the UPSIDE for jest testing for
          tailwind classes?
        </h2>
        <p>
          Jest is quick, cheap and effective. It’s not exhaustive, but it’s a
          great sanity check. In this case I can set a jest test up in a matter
          of minutes and through multiple tests can check any number of
          scenarios by changing the properties of the “Goal” object in my test
          that I run through my returnGoalStyle function. This assuages my fears
          concerning “what happens if something gets changed in the codebase and
          my tailwind classes get slightly altered and don’t work?” or “what
          happens if my ‘daysRemaining’ calculation breaks?” or “what happens if
          my future forgetful self or blissfully unaware fellow coder-in-arms
          changes the parameters of my function and it accidentally breaks”?
          Fear not, my fellow jester. The jest unit test is on our side!
        </p>
        <h2 className="text-3xl font-thin">So let’s do some jesting!</h2>
        <p>
          To set up a jest test all I’m required to do is define a “Goal” object
          and pass it into my returnGoalStyle function. Now I just have to
          assert that the returned style (which is just a string) matches
          against what I expect. Here’s an example of what a sample Goal object
          might look like.
        </p>
        <CodeBlock>
          {`    isComplete: false,
    targetDate: new Date("2022-12-1"),
    isArchived: null,`}
        </CodeBlock>
        <p>
          Next, to make my jesting experience readable to other jester coders, I
          define the tailwind class I expect to get as follows:
        </p>
        <CodeBlock>
          {`const yellowHighlightStyle = "text-black-500 bg-yellow-300 rounded-xl p-2";`}
        </CodeBlock>
        <p>
          Next, I define the “result” I expect my function to return when I
          input the “Goal” object I have defined.
        </p>
        <CodeBlock>{`const result = returnGoalStyle(goal);`}</CodeBlock>
        <p>
          Finally, this magic little line runs my test! It matches my “result”,
          what the function actually gives me, to the UI tailwind classes I am
          expecting to get, “yellowHighlightStyle” if the feature is working
          properly.
        </p>
        <CodeBlock>{` expect(result).toBe(yellowHighlightStyle);`}</CodeBlock>
        <p>Note: The End Notes contain one full jest test for more context.</p>
        <p>
          Upon running the test with the command “npm run test”, my gaze fals
          upon the lines every jest-er wants to see…
        </p>
        <div className="flex items-center">
          <img
            src={"/images/blog/jest-function-testing/testsPassed.png"}
            className="w-full"
          />
        </div>
        <p>
          UI/Tailwind class testing on goals feature – check! It’s really that
          simple. I jest you not.
        </p>
        Can I also draw your attention to the yellow text above… the fact that I
        was able to test the UI on this feature and run a number of additional
        tests in my test suite, along with 7 other unrelated test suites, and
        the whole parade of tests finish their marching orders in only 13.296
        seconds, and my entire test suite took me a number of minutes to write.
        It’s also much easier for me to reason about my code because I’m just
        checking for the existence of strings. At the least, that’s a win for me
        as a rather cheap additional line of defense protecting my customers’
        experience and the brand of my employer.
        <div>
          <p>
            Writing these UI unit tests really shifted how I looked at things.
          </p>
          <p>
            I would ask questions like… What does the user expect and how do I
            ensure a high quality user experience? How can I give my PM/tech
            lead/teammates confidence in code that I write? How do I deliver
            features quickly and with quality?
          </p>
        </div>
        <h2 className="text-3xl font-thin">FAQ/Additional Notes</h2>
        <ol>
          <li>
            <span className="font-bold">
              Before you begin: Pull the Tailwind/CSS class code that controls
              the UI functionality out of your component
            </span>
            , as I already did in the example above, and place it into a
            separate function. Make sure this function controls the critical UI
            functionality you want to test and feel may be subject to change as
            the feature evolves. Pulling Tailwind/CSS classes out of a div and
            putting them into a separate function can also be helpful because it
            makes your component code cleaner and more concise. If the function
            is reusable throughout your code base, it is best to save it in a
            separate file in an API folder and import it into your component.
          </li>
          <li>
            <span className="font-bold">
              How many scenarios should you test?
            </span>{" "}
            That’s a judgment call. However, you should ensure edge cases and
            all the most critical elements of functionality are covered.
          </li>
        </ol>
        <h2 className="text-3xl font-thin">End Notes</h2>
        <p>UserGoalsData Type for Typescript to keep things tidy.</p>
        <CodeBlock>{`export type UserGoalsData = {
  createdAt: Date;
  goalName: string;
  goalNotes?: string;
  id: string;
  updatedAt: Date;
  userId: string;
  isComplete: boolean;
  targetDate: Date;
  isArchived: boolean;
};`}</CodeBlock>
        <p>Full Code for returnGoalStyle function.</p>
        <CodeBlock>{`export const returnGoalStyle = (goal: UserGoalsData) => {
  let goalStyle = "";
  const daysRemaining = differenceInCalendarDays(
    new Date(goal.targetDate),
    new Date()
  );
  if (daysRemaining <= 0 && !goal.isComplete && !goal.isArchived) {
    goalStyle = "text-black bg-red-400 rounded-xl p-2";
  } else if (daysRemaining <= 3 && !goal.isComplete && !goal.isArchived) {
    goalStyle = "text-black-500 bg-yellow-300 rounded-xl p-2";
  } else {
    goalStyle = " text-black-500";
  }
  return goalStyle;
};`}</CodeBlock>
        <p>
          Code for yellow highlighting jest unit test. I ran 4 additional tests
          as well, FYI, to test other use cases. It took an extra 5 whole
          minutes. Once you’ve got one, more pretty easily follow!
        </p>
        <CodeBlock>
          {`test("Test returnGoalStyle function - highlighted yellow", async () => {
  //set Mock date using MockDate package
  MockDate.set('2022-11-29');

 //Arrange
  const goal = {
    __typename: "user_goals",
    createdAt: new Date,
    goalName: "write additional UI tests",
    goalNotes: null,
    id: "a1b08c36-2c8a-49e5-b9c4-f653f826fcee",
    updatedAt: new Date("2022-11-29"),
    userId: "dummyId",
    isComplete: false,
    targetDate: new Date("2022-12-1"),
    isArchived: null
  };

  const yellowHighlightStyle = "text-black-500 bg-yellow-300 rounded-xl p-2";

  // Act
  const result = returnGoalStyle(goal);

  // Assert
  expect(result).toBe(yellowHighlightStyle);`}
        </CodeBlock>
      </div>
      <div className=" space-x-4 mt-4 flex items-center">
        <img
          src={"/images/blog/jest-function-testing/kari.jpg"}
          className="w-1/6 h-1/6"
        />
        <p>
          Kari is a Junior Engineer at Skillify. She loves contributing as an
          agile team member in the EdTech sector and is always looking for ways
          to solve problems and create concise, testable code.
        </p>
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <PostLayout>{page}</PostLayout>;
};
