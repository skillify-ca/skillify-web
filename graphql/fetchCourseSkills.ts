import { gql } from "@apollo/client";

export const FETCH_COURSE_SKILLS = gql`
  query fetchCourseSkills {
    intro_course_skills {
      createdAt
      id
      isVisible
      name
      unitId
      updatedAt
    }
  }
`;
