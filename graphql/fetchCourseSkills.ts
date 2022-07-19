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

export const FETCH_USER_SKILL_RATINGS = gql`
  query fetchUserCourseSkills($userId: String = "") {
    intro_course_skills_user(where: { userId: { _eq: $userId } }) {
      id
      studentRating
    }
  }
`;
