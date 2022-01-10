import React from "react";
import Card, { CardData } from "../../../../../components/coding/Card";
import { Carousel } from "../../../../../components/coding/Carousel";
import CSSQuiz from "../../../../../components/coding/CSSQuiz";
import Navbar from "../../../../../components/Navbar";
import { MultipleChoiceSentence } from "../../../../../components/questionTypes/MultipleChoiceSentence";

const CSS = () => {
  const assignments = [
    { link: "/coding/css/sujee-week-1/index.html", title: "Sujee-Week1" },
    { link: "/coding/css/mau-week-1/index.html", title: "Mau-Week1" },
  ];
  const data: CardData[] = [
    {
      title: "W3Schools CSS tutorial",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/2175px-W3Schools_logo.svg.png",
      link: "https://www.w3schools.com/css/default.asp",
      description: "Start at the beginning and stop at CSS Overflow.",
    },
    {
      title: "CSS Grid Garden",
      image: "https://cssgridgarden.com/favicon.ico",
      link: "https://cssgridgarden.com/",
      description: "Do all levels.",
    },
    {
      title: "CSS Flexbox Froggy",
      image:
        "https://www.saashub.com/images/app/service_logos/82/fc3339facb56/large.png?1569287111",
      link: "https://flexboxfroggy.com/",
      description: "Do all levels.",
    },
    {
      title: "CSS Diner",
      image:
        "https://i.pinimg.com/originals/8a/b1/ad/8ab1ad8128508785f956eb6f58779b47.jpg",
      link: "https://flukeout.github.io/",
      description: "",
    },
  ];
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-1 p-8 m-8 space-y-4 bg-white">
        <h1 className="text-5xl font-bold">CSS 1</h1>
        <div className="grid grid-cols-1 space-y-4 bg-white sm:grid-cols-2">
          <div className="flex flex-col space-y-4">
            <p className="font-bold">Lesson</p>
            <p>
              CSS stands for cascading style sheets. It's another language that
              you need to learn that has different rules and keywords compared
              to HTML. In this lesson you will learn about different styles that
              you can apply to your HTML elements.
            </p>
            <p className="font-bold">Tutorials</p>
            <div className="grid grid-cols-2">
              {data.map((it) => (
                <div className="p-4">
                  <Card
                    title={it.title}
                    image={it.image}
                    description={it.description}
                    link={it.link}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="ml-4">
            <div className="p-4">
              <p className="font-bold">Readings</p>

              <div className="flex flex-col space-y-2 text-blue-600 underline">
                <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
                  CSS Tricks: Flexbox
                </a>
                <a href="https://css-tricks.com/snippets/css/complete-guide-grid/">
                  CSS Tricks: Grid
                </a>
                <a href="https://www.codecademy.com/learn/learn-css">
                  Codecademy CSS Course{" "}
                </a>
              </div>
            </div>{" "}
            <div className="p-4">
              <p className="font-bold">Quiz</p>
              <CSSQuiz />
            </div>
            <div className="p-4">
              <p className="font-bold">Assignments</p>
              <div className="flex flex-col space-y-2">
                Create the following layouts
                <ul className="list-disc list-decimal">
                  <li>
                    <img
                      src="/images/coding/units/css/layout1.png"
                      className="w-64"
                    />
                  </li>
                  <li>
                    <p>Apply the French flag layout to your blog assignment.</p>
                  </li>
                </ul>
              </div>
            </div>
            <img src="/images/coding/units/css/browsers.svg" className="w-96" />
          </div>
          <div className="col-span-2">
            <p className="font-bold">Previous Assignments</p>
            <p className="">
              You can look at how these pages were build by navigating to the
              page and right-clicking on it. Select View Page Source to see the
              HTML code that makes up the web page.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {assignments.map((it) => (
                <div>
                  <a className="text-blue-600 underline" href={it.link}>
                    {it.title}
                  </a>
                  <iframe
                    src={it.link}
                    className="w-full p-4 bg-white border-4 border-purple-400 shadow-lg h-96"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Carousel />
      </div>
    </>
  );
};

export default CSS;
