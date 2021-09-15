
import { AnswerType, Question } from "./question";
import { QuestionType } from "./questionTypes";
import { Skill } from "./skill";
import { generateQuestionForSkill } from "./questionGenerator";


export const randomQuestionGeneratorAPI = (req, res) => {
    console.log("REQ", req.query);
    const question = generateQuestionForSkill(req.query.skills)
    res.status(200).json(question)
  }


  