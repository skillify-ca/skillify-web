
import { gql } from "@apollo/client";

export const FETCH_SKILL_DESCRIPTION_AND_GRADE = gql`

query fetchSkillDescriptionAndGrade {
    skills{
      grade
      id
      description
    }
  }

`;


  