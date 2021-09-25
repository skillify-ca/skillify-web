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
        Skill.SUBTRACTION_5_DIGIT
    ]

    const fifthGradeQuestions = fifthGradeSkills.map((skill) => (generateQuestionForSkill(skill)))

    return fifthGradeQuestions
}

export const getSixthGradeQuestion = () => {

    const sixthGradeSkills = [
        Skill.ADDITION_PROPERTIES,
        Skill.ADDITION_PROPERTIES,
        Skill.ADDITION_PROPERTIES,
        Skill.SUBTRACTION_6_DIGIT,
        Skill.SUBTRACTION_6_DIGIT,
        Skill.SUBTRACTION_6_DIGIT
    ]

    const sixthGradeQuestions = sixthGradeSkills.map((skill) => (generateQuestionForSkill(skill)))

    return sixthGradeQuestions
}

export default getFourthGradeQuestion;

