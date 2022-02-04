import React from "react";
import Card, { CardData } from "../../../../../components/coding/Card";
import JSQuiz from "../../../../../components/coding/JSQuiz";
import Navbar from "../../../../../components/Navbar";

const JS1 = () => {
  const data: CardData[] = [
    {
      title: "Grasshopper",
      link: "https://grasshopper.app/",
      image:
        "https://grasshopper.app/assets/static/images/home-touts/adventure__journey.svg",
      description: "A mobile application with Javascript challenges",
    },
    {
      title: "Code HS",
      link: "https://codehs.com/textbook/introjs_textbook/",
      image: "https://codehs.com/static/img/logo.png",
      description: "Intro to Javascript Textbook",
    },
    {
      title: "Free Code Camp",
      link: "https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/",
      image: "/images/coding/units/javascript/freeCodeCamp.png",
      description: "Iterators Tutorial: Map, Filter, Reduce",
    },
    {
      title: "Codecademy JS Course",
      link: "https://www.codecademy.com/learn/introduction-to-javascript",
      image:
        "https://pentagram-production.imgix.net/1cbbfce1-48d5-4257-95e5-745c10e6492e/eo_codecademy_01.jpg?crop=edges&fit=crop&h=630&rect=375%2C0%2C2256%2C1412&w=1200",
      description: "An online course introducing you to Javascript",
    },
  ];
  //You can add more JS Code practice here
  const CsAssign: CardData[] = [
    {
      title: "Greetings",
      link: "/coding/JavaScript/greetings.zip",
      image: "/images/greetings.png",
      description:
        "A practice problem using strings. Say hello and something you want to learn!",
    },
    {
      title: "Temperature",
      link: "/coding/JavaScript/temperature.zip",
      image: "/images/temperature.jpeg",
      description:
        "A temperature converter problem. It gets confusing switching between Celsius and Fahrenheit",
    },
    {
      title: "Star Patterns",
      link: "/coding/JavaScript/starPatterns.zip",
      image: "/images/gold-star.png",
      description:
        "ASCII art is pretty fun to play around with. Let's get started with some star patterns!",
    },
    {
      title: "Find the Plant",
      link: "/coding/JavaScript/findPlant.zip",
      image: "/images/plant.png",
      description:
        "There are so many plants in our eco-system! Give the functiuon the name of the plant and find out its description",
    },
    {
      title: "Home Equity Calculator",
      link: "/coding/JavaScript/homeEquity.zip",
      image: "/images/home.png",
      description:
        "A home equity calculator to know how much of the house you actually own over your mortgage period",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 bg-white p-8 sm:m-8 space-y-4">
        <h1 className="font-bold text-5xl">JavaScript 1</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-white space-y-4">
          <div className="flex flex-col space-y-4">
            <p className="font-bold">Lesson</p>
            <p>
              JavaScript is yet another language that you need to learn. This
              lesson will teach you the main concepts of JavaScript.
            </p>
            <div className="flex flex-col space-y-2">
              <p className="font-bold">Tutorials</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.map((it) => (
                  <Card
                    title={it.title}
                    image={it.image}
                    description={it.description}
                    link={it.link}
                  />
                ))}
              </div>

              <p className="font-bold mt-3"> JS Coding Challenges </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CsAssign.map((it) => (
                  <Card
                    title={it.title}
                    image={it.image}
                    description={it.description}
                    link={it.link}
                  />
                ))}
              </div>
              <h1 className="font-bold">
                What to do with the coding challenges?
              </h1>
              <ol type="1">
                <li>
                  <b>1.</b> Click the Challenge and it should download a zip
                  file
                </li>
                <li>
                  <b>2.</b> In the zip file there is a practice and a correct
                  version of the code
                </li>
                <li>
                  <b>3.</b> Open the practice version of the code and follow
                  instructions in the document
                </li>
                <li>
                  <b>4.</b> As a prerequisite to the coding challenges you'll
                  need to install node.js.
                  <a
                    href="https://www.mathchamp.ca/course/coding/unit/warmups/1"
                    className="font-bold text-blue-500"
                  >
                    Click Here to See How.
                  </a>
                </li>
                <li>
                  <b>5.</b> In VS Code you will need to download an extension
                  called "Code Runner"
                </li>
                <img src="/images/extension.png" />
                <li>
                  <b>6.</b> After you are done writing your function, press
                  cmd+shift+p or control+shift+p for windows
                </li>
                <li>
                  <b>7.</b> Type Run Code in the search bar and hit enter
                  <img src="/images/cmd+shift+p.png" />
                </li>
                <li>
                  <b>8.</b> In the bottom window of VS code you should see your
                  program outputting something
                </li>
                <img src="/images/console.png" />
                <li>
                  {" "}
                  <b>9.</b> Compare results to see if your coded your function
                  correctly
                </li>
                <li>
                  <b>10.</b> If the outputs are not matching, try again, and if
                  you're still having trouble, refer to the Correct
                  implementation in the zip file
                </li>
                <li>
                  <b>11.</b> Give the challenge a try before taking a peek at
                  the solution!!
                </li>
              </ol>
            </div>
          </div>
          <div className="sm:ml-4">
            <iframe
              width="560"
              height="315"
              className="w-full"
              src="https://www.youtube.com/embed/FCMxA3m_Imc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="flex flex-col space-y-2">
              <p className="font-bold">Key Concepts</p>
              <p className="">I can define and use:</p>

              <ul className="list-disc list-inside">
                <li>Variables</li>
                <li>Functions</li>
                <li>Conditionals</li>
                <li>Arrays</li>
                <li>Loops</li>
                <li>Objects</li>
                <li>Iterators</li>
              </ul>
            </div>
            <p className="font-bold mb-4 mt-8">
              10 Javascript Code Challlenges
            </p>
            <a href="https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners/">
              <p className="bg-blue-500 p-4 text-white w-36 text-center rounded-lg border-b-4 border-blue-800">
                Start Quiz
              </p>
            </a>
            <JSQuiz />
            <div className="flex flex-col">
              <a
                className="font-bold text-yellow-600 text-2xl mt-8"
                href="/course/coding/unit/Javascript/Midterm1"
              >
                Find the JavaScript Assignment Here!
              </a>
              <a
                className="font-bold text-blue-700 text-2xl mt-8"
                href="/course/coding/unit/Javascript/Final1"
              >
                Find the Final Assignment Here!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JS1;
