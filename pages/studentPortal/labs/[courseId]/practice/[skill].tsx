import { ApolloClient, InMemoryCache, useMutation } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import ReactCardFlip from "react-card-flip";
import QuestionSet from "../../../../../components/math/stories/QuestionSet";
import { Button } from "../../../../../components/ui/Button";
import Card from "../../../../../components/ui/Card";
import EmojiSlider from "../../../../../components/ui/EmojiSlider";
import { FETCH_SKILLS } from "../../../../../graphql/fetchSkills";
import { FETCH_USER_EMOJIS } from "../../../../../graphql/fetchUserEmojis";
import { UPDATE_USER_SKILL_EMOJI } from "../../../../../graphql/updateUserEmoji";
import { useAuth } from "../../../../../lib/authContext";
import { GuessData } from "../../../../api/guessData";
import {
  generateFinanceQuestions,
  generateMath1Questions,
  generateMath2Questions,
  generatePracticeQuestions,
} from "../../../../api/practice/practiceQuestionGenerator";
import { Question, AnswerType } from "../../../../api/question";
import { QuestionType } from "../../../../api/questionTypes";
import { Skill } from "../../../../api/skill";

const PracticeQuiz = ({ skill, courseId }) => {
  enum STAGE {
    QUESTION,
    EMOJI,
    SESSION_END,
  }
  const { user } = useAuth();
  const router = useRouter();

  const [isFlipped, setIsFlipped] = useState(false); // is the front of the card showing or is the back showing
  const [index, setIndex] = useState(0); // which question are we on in the question set
  const [replayCount, setReplayCount] = useState(0); // how many times has the user replayed this practice session
  const [emoji, setEmoji] = useState(0); // value of the emoji slider, user will use to represent their confidence of skill

  const [guessAttempt, setGuessAttempt] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [indexCap, setIndexCap] = useState(false);

  const [nextQuestionButton, setNextQuestionButton] = useState(false);
  const [continueButton, setContinueButton] = useState(false);

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

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    if (courseId === "math1") {
      setQuestionData(generateMath1Questions(Number.parseInt(skill)));
    } else if (courseId === "math2") {
      setQuestionData(generateMath2Questions(Number.parseInt(skill)));
    } else if (courseId === "finance") {
      setQuestionData(generateFinanceQuestions(Number.parseInt(skill)));
    }
    setCorrectGuess(0);
    setIndex(0);
    setIsFlipped(false);
    setIndexCap(false);
    setStage(STAGE.QUESTION);
    setContinueButton(false);
  }, [replayCount]);

  const applyNextQuestion = () => {
    toggleFlip();
    setNextQuestionButton(false);
    setGuessAttempt("");
    setCorrectAnswer(false);
    setWrongAnswer(false);
    nextQuestion();
  };

  const nextQuestion = () => {
    if (index < questionData.length - 1) {
      setIndex(index + 1);
      if (inputElement.current) {
        inputElement.current.focus();
      }
    } else {
      setIndex(index + 1);
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
    setStage(STAGE.SESSION_END);
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
    <div className="flex flex-col items-center justify-center gap-8 pt-8">
      <div className="flex flex-row justify-between p-4 rounded-lg shadow-lg bg-rattata w-96 ">
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
        {/* Front of the card */}
        <div className="align-middle w-50">
          {stage === STAGE.QUESTION ? (
            <div className="flex flex-col items-center justify-center text-murkrow">
              <QuestionSet
                questionData={questionData}
                index={index}
                submitGuess={submitGuess}
              />
            </div>
          ) : stage === STAGE.EMOJI ? (
            <div>
              <Card size="large">
                <div
                  className={`grid-cols-1 grid text-murkrow justify-items-center space-y-8 z-10 transition-opacity duration-150 ease-in`}
                >
                  <p className="mt-12 font-bold">
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
          ) : stage === STAGE.SESSION_END ? (
            <div className="flex flex-col p-8 bg-white rounded-lg">
              <img src="/images/goodWork.png" className="mt-12 w-80"></img>

              <div className="flex flex-row justify-between ">
                <Button
                  label="Back"
                  backgroundColor="purple"
                  onClick={() => router.back()}
                ></Button>

                <Button
                  label="Restart"
                  backgroundColor="green"
                  onClick={() => setReplayCount(replayCount + 1)}
                ></Button>
              </div>
            </div>
          ) : null}
        </div>
        {/* Back of the card */}
        <div className={` flex-col justify-center items-center gap-8 `}>
          <div className={"justify-items-center align-middle w-50"}>
            <Card size="large">
              <div className="flex flex-col justify-around h-full">
                {correctAnswer ? (
                  <p className="text-xl font-bold text-gray-400">
                    Correct,
                    <span className="font-bold text-green-400">
                      {" " + guessAttempt + " "}
                    </span>
                    was the answer!
                  </p>
                ) : wrongAnswer ? (
                  <div className="space-y-8 text-lg font-bold text-gray-400">
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
                ) : null}
                {nextQuestionButton && (
                  <div className="flex justify-center">
                    <Button label="Next" onClick={applyNextQuestion}></Button>
                  </div>
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

  const ids = data.skills.map((skill) => {
    return { params: { skill: skill.id.toString(), courseId: skill.courseId } };
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
      courseId: params.courseId,
    },
  };
}

export default PracticeQuiz;
