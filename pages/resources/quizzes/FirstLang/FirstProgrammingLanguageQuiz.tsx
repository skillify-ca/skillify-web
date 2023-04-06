import { useEffect, useState } from "react";
import LangResults from "../../../../components/resources/quizzes/langQuiz/LangResults";
import BluePrint from "../../../../components/resources/quizzes/shared/BluePrint";
import SkillSelections, {
  QuizOptionViewState,
  QuizViewState,
} from "../../../../components/resources/quizzes/shared/SkillSelections";
import StartQuiz from "../../../../components/resources/quizzes/shared/StartQuiz";
import { quizData } from "../../../api/studentPortal/quizzes/firstProgrammingLanguage";

export enum Stage {
  START,
  QUESTIONS,
  BLUEPRINT,
  RESULTS,
}

const FirstProgrammingLanguageQuiz = () => {
  const [stage, setStage] = useState(Stage.START);
  const [quizViewState, setQuizViewState] = useState<QuizViewState>();

  useEffect(() => {
    const quizViewState = {
      title: quizData.title,
      body: quizData.body,
      questions: quizData.questions.map((question) => {
        return {
          title: question.title,
          body: question.body,
          options: question.options,
        };
      }),
      currentQuestion: 0,
      progress: 0,
    };

    setQuizViewState(quizViewState);
  }, []);

  const handleNextClick = () => {
    if (
      stage == Stage.QUESTIONS &&
      quizViewState.currentQuestion < quizData.questions.length - 1
    ) {
      setQuizViewState({
        ...quizViewState,
        currentQuestion: quizViewState.currentQuestion + 1,
      });
    } else setStage((prevStage) => prevStage + 1);
  };

  const handleBackClick = () => {
    if (stage == Stage.QUESTIONS && quizViewState.currentQuestion > 0) {
      setQuizViewState({
        ...quizViewState,
        currentQuestion: quizViewState.currentQuestion - 1,
      });
    } else setStage((prevStage) => prevStage - 1);
  };

  const handleOptionClick = (option: QuizOptionViewState) => {
    const selectedQuizOption = quizViewState.questions.map((question) => ({
      ...question,
      options: question.options.map((questionOption) =>
        questionOption.name === option.name
          ? { ...questionOption, isSelected: true }
          : questionOption
      ),
    }));

    const updatedQuizViewState = {
      ...quizViewState,
      questions: selectedQuizOption,
    };

    setQuizViewState(updatedQuizViewState);
  };

  const renderStage = () => {
    switch (stage) {
      case Stage.START:
        return (
          <StartQuiz
            onNextClick={handleNextClick}
            title={quizData.title}
            body={quizData.body}
          />
        );
      case Stage.QUESTIONS:
        return (
          <SkillSelections
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
            handleOptionClick={handleOptionClick}
            quizViewState={quizViewState}
          />
        );
      case Stage.BLUEPRINT:
        return (
          <BluePrint
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
          />
        );
      case Stage.RESULTS:
        return <LangResults onBackClick={handleBackClick} />;
      default:
        return null;
    }
  };
  return (
    <>
      <div>{renderStage()}</div>
    </>
  );
};

export default FirstProgrammingLanguageQuiz;
FirstProgrammingLanguageQuiz.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
