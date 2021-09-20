import { generateQuestionForSkill } from "../questionGenerator"
import { Skill } from "../skill"

export const fourthGradeSkills = [
    Skill.ADDITION_4_DIGIT,
    Skill.ADDITION_4_DIGIT,
    Skill.ADDITION_4_DIGIT,
    Skill.SUBTRACTION_4_DIGIT,
    Skill.SUBTRACTION_4_DIGIT,
    Skill.SUBTRACTION_4_DIGIT,
]

export const getFourthGradeQuestion = () => {

    const fourthGradeQuestions = fourthGradeSkills.map((skill) => (generateQuestionForSkill(skill)))

    return fourthGradeQuestions

}

export const fifthGradeSkills = [
    Skill.ADDITION_5_DIGIT,
    Skill.ADDITION_5_DIGIT,
    Skill.ADDITION_5_DIGIT,
    Skill.SUBTRACTION_5_DIGIT,
    Skill.SUBTRACTION_5_DIGIT,
    Skill.SUBTRACTION_5_DIGIT
]

export const getFifthGradeQuestion = () => {

    const fifthGradeQuestions = fifthGradeSkills.map((skill) => (generateQuestionForSkill(skill)))

    return fifthGradeQuestions
}

export const sixthGradeSkills = [
    Skill.ADDITION_6_DIGIT,
    Skill.ADDITION_6_DIGIT,
    Skill.ADDITION_6_DIGIT,
    Skill.SUBTRACTION_6_DIGIT,
    Skill.SUBTRACTION_6_DIGIT,
    Skill.SUBTRACTION_6_DIGIT
]

export const getSixthGradeQuestion = () => {

    const sixthGradeQuestions = sixthGradeSkills.map((skill) => (generateQuestionForSkill(skill)))

    return sixthGradeQuestions
}

export default getFourthGradeQuestion;

// FOR VITHUSHAN: I'm sure I can include the arrays in one functional component, but I thought about trying something here


// PSUEDO CODE

// student starts off with the Grade 4 array - check
// if that student answers the questions correctly, they move to grade 5, up until grade 6
// if that student answers the question incorrectly, they stay on grade 4, if not, they move down a grade
// if that student finishes the addition section, they go back to grade 4 for next type of questions
