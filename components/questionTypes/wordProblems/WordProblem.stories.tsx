import React from "react";
import { Story, Meta } from "@storybook/react";

import { WordProblemAdd, WordProblemAddProp } from "./WordProblemAdd";
import { AnswerType } from "../../../pages/api/question";
import { QuestionType } from "../../../pages/api/questionTypes";
import { Skill } from "../../../pages/api/skill";
import Card from "../../ui/Card";
import { createWordProblemModel } from "../../../pages/api/questionGenerators/wordProblemQuestion";

export default {
  title: "math/Word Problem Simple",
  component: WordProblemAdd,
  argTypes: {},
} as Meta;

type WordProblemStoryProp = {
  text: string;
  name: string;
};

const Template: Story<WordProblemAddProp> = (args) => {
  return (
    <Card size="large">
      <WordProblemAdd {...args} />
    </Card>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  question: {
    text: "2 + 2",
    wordProblem: createWordProblemModel("+"),
    questionType: QuestionType.BINARY_WORD_PROBLEM,
    answerType: AnswerType.NUMBER,
    answer: "0",
    skill: Skill.ADDITION_SINGLE,
  },
};
