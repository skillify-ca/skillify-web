import { gql } from "@apollo/client";

export const FETCH_SKILL_DESCRIPTION_GRADE_AND_UNIT = gql`
  query fetchSkillDescriptionAndGrade {
    skills {
      grade
      id
      description
      unit
    }
  }
`;
