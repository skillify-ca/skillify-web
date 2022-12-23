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
    "typescript-web": (
      <div>
        <h2>You should learn TypeScript!</h2>

        <p>
          With TypeScript you can build interactive web apps. It's a very
          beginner-friendly language. TypeScript is an extension of the
          JavaScript programming language, so if you know a little JavaScript
          you can learn TypeScript easily.
        </p>
        <p>
          Learning TypeScript can make it easier to write and maintain large and
          complex JavaScript projects, and can also make it easier to
          collaborate with other developers.
        </p>
        <p>
          Many large organizations use TypeScript like Netflix, Microsoft and
          Google
        </p>
        <p>
          TypeScript was created and is maintained by Microsoft. It's
          open-source and available on Github.
        </p>
        <p>
          If you become proficient in TypeScript then you can apply for all
          sorts of software developer roles: front-end developer, mobile
          developer and backend developer.
        </p>
      </div>
    ),
    android: (
      <div>
        <h2>You should learn Kotlin!</h2>

        <p>
          With Kotlin you can build mobile apps for Android devices. It's an
          easy first language to learn. Kotlin is an extension of the Java
          programming language, so if you know a little Java you can learn
          Kotlin easily. (Note: Java and JavaScript have nothing to do with each
          other and are quite different)
        </p>
        <p>
          Learning Kotlin can make it easier to write and maintain large and
          complex Android & backend projects, and can also make it easier to
          work with an existing Java codebase.
        </p>
        <p>
          Most large organizations that have an Android app on the Google Play
          Store use Kotlin like Netflix, Spotify and Meta
        </p>
        <p>
          Kotlin was developed by JetBrains and has been officially support by
          Google for Android development since 2017. Kotlin also has a strong
          and growing community with many tools and frameworks to help you get
          started.
        </p>
        <p>
          If you become proficient in Kotlin then you can apply for different
          kinds of software developer roles: Android developer and backend
          developer.
        </p>
      </div>
    ),
    swift: (
      <div>
        <h2>You should learn Swift!</h2>

        <p>
          With Swift you can build mobile apps for iOS devices. It's a powerful
          and intuitive language but it's not the easiest first language to
          learn.
        </p>
        <p>
          Learning Swift can help you build applications for iOS, iPadOS, macOS,
          watchOS, and tvOS.
        </p>
        <p>
          Most large organizations that have an iPhone app on the App Play Store
          use Swift like Netflix, Spotify and Meta
        </p>
        <p>
          Swift was developed by Apple Inc. Swift also has a strong and growing
          community with many tools and frameworks to help you get started.
        </p>
        <p>
          If you become proficient in Swift then you can only apply for iOS
          developer. Although this seems limiting, an iOS developer is a highly
          specialized and valued role in most companies.
        </p>
      </div>
    ),
    "python-ai": (
      <div>
        <h2>You should learn Python!</h2>

        <p>
          With Python you can analyze different data sets and easily crunch
          numbers. It's an easy first language to learn.
        </p>
        <p>
          Learning Python can help you start working with Artificial
          Intelligence frameworks.
        </p>
        <p>
          There are quite a few organizations that leverage Python in the
          workplace. Many financial companies use Python to analyze data sets
          and generate insights.
        </p>
        <p>
          PyTorch is an open-source Python library used in machine learning. It
          was developed by Facebook's AI Research lab in January 2016. Although
          Python is a beginner-friendly language, mastering it to a level where
          you can start working with AI algorithms is quite hard.
        </p>
        <p>
          If you become proficient in Python then you can try to build your own
          Machine Learning algorithms with public datasets.
        </p>
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
          text: "Knowing how to build out any User Interface (UI) design imaginable for an app",
          image: "/images/quiz/first-language/UI.jpg",
          id: "a",
        },
        {
          text: "Knowing how to integrate with any third-party platform (eg. Spotify, Twitter, Discord, Reddit, Slack, Todoist, etc...)",
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
          text: "Knowing how to build out apps and websites for laptop, tablet and desktop devices",
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
          text: "Being able to build and analyze algorithms for Machine Learning and Artifical Intelligence",
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
