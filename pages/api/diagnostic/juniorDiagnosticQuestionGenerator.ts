import { generateQuestionForSkill } from "../questionGenerator"
import { Skill } from "../skill"

const getQuestion = () => {

    const skills = [

        Skill.ADDITION_4_DIGIT,
        Skill.ADDITION_5_DIGIT,
        Skill.ADDITION_6_DIGIT,
        Skill.SUBTRACTION_4_DIGIT,
        Skill.SUBTRACTION_5_DIGIT,
        Skill.SUBTRACTION_6_DIGIT,
        Skill.MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT,
        Skill.MULTIPLY_TWO_DIGIT_BY_TWO_DIGIT,
        Skill.MULTIPLY_THREE_DIGIT_BY_TENTH,
        Skill.DIVISION_THREE_DIGIT_BY_TENTH,
        Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT,
        Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT

    ]

    const questions = skills.map((skill) => (generateQuestionForSkill(skill)))

    return questions

}

export default getQuestion;
