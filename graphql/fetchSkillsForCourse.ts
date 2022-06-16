import { gql } from "@apollo/client";

export const FETCH_SKILLS_FOR_COURSE = gql`
  query fetchSkillsForCourse($courseId: String = "") {
    skills(where: { courseId: { _eq: $courseId } }) {
      id
      description
      courseId
      image
      unit {
        title
        level
      }
    }
  }
`;
