import { generateQuestionForSkill } from "./questions/questionGenerator";

export const randomQuestionGeneratorAPI = (req, res) => {
  console.log("REQ", req.query);
  const question = generateQuestionForSkill(req.query.skills);
  res.status(200).json(question);
};
