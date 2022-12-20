import { useState } from "react";
import { MultipleChoiceWord } from "../../components/questionTypes/MultipleChoiceWord";
import SEO from "../../components/SEO";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { MCOption } from "../api/question";

type Question =
  | {
      type: "multiple-choice";
      text: string;
      options: MCOption[];
      onNext: (id: string) => void;
    }
  | {
      type: "contact-info";
      text: string;
    };
export default function Page() {
  const WHAT_IS_A_HIGHER_PRIORITY =
    "What is a higher training priority for you?";

  const endScreens = {
    "typescript-react": (
      <div>
        Talk about how this person should learn TypeScript so they can build
        interactive web apps. Talk about how beginner friendly it is
      </div>
    ),
    android: (
      <div>
        Talk about how Kotlin is a great language to learn to learn how to build
        android apps
      </div>
    ),
    swift: (
      <div>
        Talk about how Swift is a great language to learn to learn how to build
        iphone apps
      </div>
    ),
    "typescript-web": (
      <div>
        Overall, TypeScript is a great language to learn for building
        interactive websites and web applications because it builds on top of
        the strong foundations of JavaScript and adds powerful new features that
        can help you write cleaner, more maintainable code.
      </div>
    ),
    "python-ai": (
      <div>
        Talk about how Python is a great programming language to learn in order
        to work with Artificial Intelligence. Pytorch is a popular framework to
        get started with.
      </div>
    ),
    "typescript-data-viz": (
      <div>
        Talk about how you can use can use TypeScript to fetch and visualize
        data. Victory.js is a popular library to get started with for data
        visualization.
      </div>
    ),
    "typescript-api": (
      <div>
        Talk about how you can use TypeScript to fetch data from third-parties.
        You can also update data on these platforms through your app.
      </div>
    ),
  };
  const questions: Question[] = [
    // Question 0
    {
      text: "What is your name?",
      type: "contact-info",
    },
    // Question 1
    {
      text: "Have you tried to learn coding before?",
      type: "multiple-choice",
      options: [
        {
          id: "a",
          text: "Yes, but I get stuck after Hello World",
          image: "/images/quiz/first-language/coded-before.jpg",
        },
        {
          id: "b",
          text: "No, this is my first time trying to learn coding",
          image: "/images/quiz/first-language/beginner.jpg",
        },
      ],
      onNext: () => {
        goToQuestion(2);
      },
    }, // Question 2
    {
      text: WHAT_IS_A_HIGHER_PRIORITY,
      type: "multiple-choice",
      options: [
        {
          text: "Being able to build your own apps",
          image: "/images/quiz/first-language/build-app.jpg",
          id: "a",
        },
        {
          text: "Being able to easily work with and manipulate data",
          image: "/images/quiz/first-language/analyze-data.jpg",
          id: "b",
        },
      ],
      onNext: (id) => {
        id === "a" ? goToQuestion(3) : goToQuestion(6);
      },
    },
    // Question 3
    {
      text: WHAT_IS_A_HIGHER_PRIORITY,
      type: "multiple-choice",
      options: [
        {
          text:
            "Knowing how to build out any User Interface (UI) design imaginable for an app",
          image: "/images/quiz/first-language/UI.jpg",
          id: "a",
        },
        {
          text:
            "Knowing how to integrate with any third-party platform (eg. Spotify, Twitter, Discord, Reddit, Slack, Todoist, etc...)",
          image: "/images/quiz/first-language/api.jpg",
          id: "b",
        },
      ],
      onNext: (id) => {
        id === "a" ? goToQuestion(4) : goToEnd("typescript-api");
      },
    },
    // QUestion 4
    {
      text: WHAT_IS_A_HIGHER_PRIORITY,
      type: "multiple-choice",
      options: [
        {
          text:
            "Knowing how to build out apps and websites for laptop, tablet and desktop devices",
          image: "/images/quiz/first-language/desktops.jpg",
          id: "a",
        },
        {
          text: "Knowing how to build out apps for mobile devices",
          image: "/images/quiz/first-language/mobile.jpg",
          id: "b",
        },
      ],
      onNext: (id) => {
        id === "a" ? goToEnd("typescript-web") : goToQuestion(5);
      },
    },
    // Question 5
    {
      text: WHAT_IS_A_HIGHER_PRIORITY,
      type: "multiple-choice",
      options: [
        {
          text: "Knowing how to build out apps for iPhones",
          image: "/images/quiz/first-language/iphone.jpg",
          id: "a",
        },
        {
          text: "Knowing how to build out apps for Android devices",
          image: "/images/quiz/first-language/android.jpg",
          id: "b",
        },
      ],
      onNext: (id) => {
        id === "a" ? goToEnd("swift") : goToEnd("android");
      },
    },

    // Question 6
    {
      text: WHAT_IS_A_HIGHER_PRIORITY,
      type: "multiple-choice",
      options: [
        {
          text: "Knowing how to analyze and visualize data",
          image: "/images/quiz/first-language/analyze-data.jpg",
          id: "a",
        },
        {
          text:
            "Being able to build and analyze algorithms for Machine Learning and Artifical Intelligence",
          image: "/images/quiz/first-language/ai.jpg",
          id: "b",
        },
      ],
      onNext: (id) => {
        id === "a" ? goToEnd("typescript-data-viz") : goToEnd("python-ai");
      },
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [endScreen, setEndScreen] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function goToQuestion(questionIndex) {
    setCurrentQuestion(questionIndex);
  }
  function goToEnd(endScreen) {
    setEndScreen(endScreen);
  }
  const question: Question = questions[currentQuestion];
  return (
    <div>
      <SEO
        title={"Breaking into Tech Career Personality Quiz"}
        description={
          "This quiz tells you best path to starting a career in tech"
        }
        image={"https://melv1n.com/img/learn-to-code-how-to-start.png"}
      />
      <div className="flex flex-col bg-white">
        <div className="flex flex-col items-center py-4 text-white bg-murkrow">
          <img src="/images/logo-dark.svg" className="w-36" />
          <h1 className="mt-4 text-3xl font-bold text-center">
            What Language Should I Learn To Code?
          </h1>
          <p className="text-center">
            This free quiz will help you figure out what job in tech is the best
            fit for you.
          </p>
        </div>

        {endScreen === undefined ? (
          <div className="flex flex-col items-center w-full bg-gray-200">
            {question.type === "multiple-choice" ? (
              <MultipleChoiceWord
                options={question.options}
                answer={""}
                submitGuess={(guess) => {
                  question.onNext(guess);
                }}
                children={<p className="text-2xl font-bold">{question.text}</p>}
              />
            ) : questions[currentQuestion].type === "contact-info" ? (
              <div className="flex flex-col items-center w-full p-8 bg-slate-200">
                <p>Enter Your Name:</p>
                <Input
                  value={name}
                  setValue={setName}
                  placeholder="Enter Name"
                />
                <p className="mt-4">Enter Your Email:</p>
                <Input
                  value={email}
                  setValue={setEmail}
                  placeholder="Enter Your Email"
                />
                <div className="mt-8">
                  <Button label="Next" onClick={() => goToQuestion(1)} />
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          <div>
            "ENDSCREEN" {endScreen}
            {endScreen && endScreens[endScreen]}
            <div
              onClick={() => {
                setEndScreen(undefined);
                setCurrentQuestion(0);
              }}
              className="p-4 font-bold text-center text-white rounded-lg cursor-pointer w-36 bg-sky-500 hover:bg-sky-400"
            >
              Restart Quiz
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Page.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
