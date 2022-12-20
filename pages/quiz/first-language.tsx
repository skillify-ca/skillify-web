import { useState } from "react";
import { MultipleChoiceWord } from "../../components/questionTypes/MultipleChoiceWord";
import SEO from "../../components/SEO";
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
      text: "What is a higher priority?",
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
        id === "a" ? goToQuestion(4) : goToQuestion(8);
      },
    },
    // Question 3
    {
      text: "What is a higher priority?",
      type: "multiple-choice",
      options: [
        {
          text:
            "Storing personal data in a private database and connecting to it ",
          image: "/images/quiz/first-language/database.jpg",
          id: "a",
        },
        {
          text:
            "Connecting to and reading my data from third-party platforms (eg. Spotify, Twitter, Reddit, Discord, Todoist)",
          image: "/images/quiz/first-language/api.jpg",
          id: "b",
        },
      ],
      onNext: (id) => {
        id === "a"
          ? goToEnd("typescript-airtable-db")
          : goToEnd("typescript-api");
      },
    },
    // Question 4
    {
      text: "What is a higher priority?",
      type: "multiple-choice",
      options: [
        {
          text:
            "Knowing how to build out any User Interface (UI) design imaginable for an app",
          image: "/images/quiz/first-language/UI.jpg",
          id: "a",
        },
        {
          text: "Knowing how to store, read and and update data",
          image: "/images/quiz/first-language/api.jpg",
          id: "b",
        },
      ],
      onNext: (id) => {
        id === "a" ? goToQuestion(5) : goToQuestion(3);
      },
    },
    // QUestion 5
    {
      text: "What is a higher priority?",
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
        id === "a" ? goToQuestion(7) : goToQuestion(6);
      },
    },
    // Question 6
    {
      text: "What is a higher priority?",
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
    // Question 7
    {
      text: "What is a higher priority?",
      type: "multiple-choice",
      options: [
        {
          text:
            "Knowing how to build out websites for different internet browsers",
          image: "/images/quiz/first-language/website.jpg",
          id: "a",
        },
        {
          text:
            "Knowing how to build out apps for different desktop operating systems (eg. MacOS, Windows, Linux)",
          image: "/images/quiz/first-language/desktops.jpg",
          id: "b",
        },
      ],
      onNext: (id) => {
        id === "a"
          ? goToEnd("typescript-react")
          : goToEnd("typesript-react-desktop");
      },
    },
    // Question 8
    {
      text: "What is a higher priority?",
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
              <div onClick={() => goToQuestion(1)}>CONTACT FORM</div>
            ) : null}
          </div>
        ) : (
          <div>
            "ENDSCREEN" {endScreen}
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
