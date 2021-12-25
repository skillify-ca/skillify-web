import { ApolloClient, InMemoryCache, useMutation } from "@apollo/client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ReactCardFlip from "react-card-flip";
import QuestionSet from "../../components/stories/QuestionSet";
import { Button } from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import EmojiSlider from "../../components/ui/EmojiSlider";
import { FETCH_SKILLS } from "../../graphql/fetchSkills";
import { FETCH_USER_EMOJIS } from "../../graphql/fetchUserEmojis";
import { UPDATE_USER_SKILL_EMOJI } from "../../graphql/updateUserEmoji";
import { useAuth } from "../../lib/authContext";
import { GuessData } from "../api/guessData";
import { generatePracticeQuestions } from "../api/practice/practiceQuestionGenerator";
import { Question, AnswerType } from "../api/question";
import { QuestionType } from "../api/questionTypes";
import { Skill } from "../api/skill";

const PracticeQuiz = ({ skill }) => {
  enum STAGE {
    QUESTION,
    EMOJI,
    END_SESSION,
  }
  const { user } = useAuth();
  const [isFlipped, setIsFlipped] = useState(false);
  const [display, setDisplay] = useState("flex");
  const [continueFaded, setContinueFaded] = useState(0);
  const [isFaded, setIsFaded] = useState(1);
  const [index, setIndex] = useState(0);
  const [emoji, setEmoji] = useState(0);
  const [guessAttempt, setGuessAttempt] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [indexCap, setIndexCap] = useState(false);
  const [nextQuestionButton, setNextQuestionButton] = useState(false);
  const [continueButton, setContinueButton] = useState(false);
  const [interval, setMyInterval] = useState(null);
  const [stage, setStage] = useState(STAGE.QUESTION);
  const [correctGuess, setCorrectGuess] = useState(0);
  const [questionData, setQuestionData] = useState<Question[]>([
    {
      text: "",
      answer: "",
      answerType: AnswerType.NUMBER,
      questionType: QuestionType.HORIZONTAL_EQUATION,
      skill: Skill.ADDITION_SINGLE,
    },
  ]);

  const [updateUserEmoji, updateUserEmojiMutation] = useMutation(
    //Mutation for updating a user emoji value after a practice
    UPDATE_USER_SKILL_EMOJI,
    {
      refetchQueries: [
        {
          query: FETCH_USER_EMOJIS,
          variables: {
            userId: user.uid,
            skillId: [Number.parseInt(skill)],
          },
        },
      ],
    }
  );
  const inputElement = useRef(null);

  function getComponent() {
    const sessionEnd = (
      <div>
        <div>
          <img src="/images/goodWork.png" className="w-96 mt-12"></img>
        </div>

        <div className="flex flex-row space-x-16">
          <Link href={`/practice`}>
            <Button label="Home" backgroundColor="purple"></Button>
          </Link>
          <Button
            label="Practice again"
            backgroundColor="green"
            onClick={() => window.location.reload()}
          ></Button>
        </div>
      </div>
    );

    const emojiFeedback = (
      <div>
        <Card size="large">
          <div
            className={`grid-cols-1 grid justify-items-center space-y-8 z-10 transition-opacity duration-150 ease-in`}
          >
            <p className="font-bold mt-12">
              How confident were you with those practice questions?
            </p>
            <EmojiSlider callback={setEmojiCallback} />
            <Button
              label="Submit"
              backgroundColor="blue"
              onClick={saveEmoji}
            ></Button>
          </div>
        </Card>
      </div>
    );

    const questionSet = (
      <QuestionSet
        title={"Practice"} // TODO
        questionData={questionData}
        index={index}
        inputElement={inputElement}
        submitGuess={submitGuess}
        score={correctGuess}
        HUDEnabled={false}
      />
    );
    let stageLevel = stage;

    //Controlling the stages of the practice session
    switch (stageLevel) {
      case STAGE.QUESTION:
        return questionSet;
      case STAGE.EMOJI:
        return emojiFeedback;
      case STAGE.END_SESSION:
        return sessionEnd;
    }
  }

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    setQuestionData(generatePracticeQuestions(Number.parseInt(skill)));
  }, []);

  const applyNextQuestion = () => {
    toggleFlip();

    setNextQuestionButton(false);
    setGuessAttempt("");
    setCorrectAnswer(false);
    setWrongAnswer(false);
    nextQuestion();
  };

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const applyContinuePage = async () => {
    setIsFaded(0);
    await delay(150);
    setDisplay("hidden");
    setContinueFaded(100);
    setStage(STAGE.END_SESSION);
  };

  const nextQuestion = () => {
    if (index < questionData.length - 1) {
      setIndex(index + 1);
      if (inputElement.current) {
        inputElement.current.focus();
      }
    } else {
      setIndex(index + 1);
      clearInterval(interval);
      setMyInterval(null);
    }
  };

  const saveEmoji = () => {
    updateUserEmoji({
      variables: {
        userId: user.uid,
        skillId: Number.parseInt(skill),
        emoji: emoji,
      },
    });
    setStage(STAGE.END_SESSION);
    applyContinuePage;
  };

  const setEmojiCallback = (val: number) => {
    setEmoji(val);
  };

  const reviewPage = () => {
    setStage(STAGE.EMOJI);
    toggleFlip();
  };

  const submitGuess = (guess: GuessData) => {
    if (isFlipped && index <= questionData.length - 1) {
      if (index == questionData.length - 1) {
        reviewPage();
      } else {
        applyNextQuestion();
      }
    } else {
      toggleFlip();
      if (index < questionData.length && !indexCap) {
        if (guess.guess != "") {
          setGuessAttempt(guess.guess.toString());
        }
        if (index >= questionData.length - 1) {
          setIndexCap(true);
        }
        if (guess.isCorrect) {
          setCorrectGuess(correctGuess + 1);
          setCorrectAnswer(true);
        } else {
          setWrongAnswer(true);
        }
        if (index < questionData.length - 1) {
          setNextQuestionButton(true);
        } else {
          setContinueButton(true);
        }
      }
    }
  };

  return (
    <div className="bg-blue-100 heropattern-architect-blue-50 min-h-screen">
      <div className="flex flex-col justify-center items-center space-y-8">
        <div className="grid grid-cols-2 w-full p-4 bg-gray-100 shadow-lg">
          <p className="font-semibold">
            Question: {index + 1} / {questionData.length}
          </p>
          <p className="font-semibold">
            Score: {correctGuess} / {questionData.length}
          </p>
        </div>
        <ReactCardFlip
          isFlipped={isFlipped}
          flipDirection="horizontal"
          infinite={true}
        >
          <div className="align-middle w-50">{getComponent()}</div>
          <div
            className={`${display} flex-col justify-center items-center gap-8 transition-opacity duration-150 ease-in-out opacity-${isFaded}`}
          >
            <div className={"justify-items-center align-middle w-50"}>
              <Card size="large">
                <div className="flex flex-col justify-around h-full">
                  {correctAnswer ? (
                    <p className="font-bold text-gray-400 text-xl">
                      Correct,
                      <span className="font-bold text-green-400">
                        {" " + guessAttempt + " "}
                      </span>
                      was the answer!
                    </p>
                  ) : wrongAnswer ? (
                    <div className="text-lg text-gray-400 font-bold space-y-8">
                      <span>The correct answer was </span>
                      <span className="font-bold text-green-400">
                        {questionData[index].answer.toString()}&nbsp;
                      </span>
                      <br></br>

                      <span>
                        {guessAttempt != "" ? (
                          <span>
                            <span>Your answer was </span>
                            <span className="font-bold text-red-500">
                              {guessAttempt}
                            </span>
                          </span>
                        ) : (
                          <span className="font-bold">
                            Don't forget to answer next time!
                          </span>
                        )}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                  {nextQuestionButton && (
                    <Button
                      label="Next Question"
                      backgroundColor="yellow"
                      onClick={applyNextQuestion}
                    ></Button>
                  )}
                  {continueButton && (
                    <Button
                      label="Continue"
                      backgroundColor="green"
                      onClick={reviewPage}
                    ></Button>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: "https://talented-duckling-40.hasura.app/v1/graphql/",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: FETCH_SKILLS,
  });

  const ids = data.skills.map((element) => {
    return { params: { skill: element.id.toString() } };
  });

  return {
    paths: ids,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      skill: params.skill,
    },
  };
}

export default PracticeQuiz;
