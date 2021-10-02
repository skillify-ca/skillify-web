import { Question } from "../question"
import { generateQuestionForSkill } from "../questionGenerator"
import { Skill } from "../skill"

export const getFourthGradeQuestion = () => {

    const fourthGradeSkills = [
        Skill.ADDITION_4_DIGIT,
        Skill.ADDITION_4_DIGIT,
        Skill.ADDITION_4_DIGIT,
        Skill.SUBTRACTION_4_DIGIT,
        Skill.SUBTRACTION_4_DIGIT,
        Skill.SUBTRACTION_4_DIGIT,
        Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT,
        Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT,
        Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT,
        Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT,
        Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT,
        Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT

    ]

    const fourthGradeQuestions = fourthGradeSkills.map((skill) => (generateQuestionForSkill(skill)))

    return fourthGradeQuestions

}

export const getFifthGradeQuestion = () => {

    const fifthGradeSkills = [
        Skill.ADDITION_5_DIGIT,
        Skill.ADDITION_5_DIGIT,
        Skill.ADDITION_5_DIGIT,
        Skill.SUBTRACTION_5_DIGIT,
        Skill.SUBTRACTION_5_DIGIT,
        Skill.SUBTRACTION_5_DIGIT,
        Skill.MULTIPLY_TWO_DIGIT_BY_TWO_DIGIT,
        Skill.MULTIPLY_TWO_DIGIT_BY_TWO_DIGIT,
        Skill.MULTIPLY_TWO_DIGIT_BY_TWO_DIGIT,
        Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT,
        Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT,
        Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT

    ]

    const fifthGradeQuestions = fifthGradeSkills.map((skill) => (generateQuestionForSkill(skill)))

    return fifthGradeQuestions
}

export const getSixthGradeQuestion = () => {

    const sixthGradeSkills = [
        Skill.ADDITION_6_DIGIT,
        Skill.ADDITION_6_DIGIT,
        Skill.ADDITION_6_DIGIT,
        Skill.SUBTRACTION_6_DIGIT,
        Skill.SUBTRACTION_6_DIGIT,
        Skill.SUBTRACTION_6_DIGIT,
        Skill.MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT,
        Skill.MULTIPLY_THREE_DIGIT_BY_TENTH,
        Skill.MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT,
        Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT,
        Skill.DIVISION_THREE_DIGIT_BY_TENTH,
        Skill.DIVISION_THREE_DIGIT_BY_TENTH

    ]

    const sixthGradeQuestions = sixthGradeSkills.map((skill) => (generateQuestionForSkill(skill)))

    return sixthGradeQuestions
}

export default getFourthGradeQuestion;

