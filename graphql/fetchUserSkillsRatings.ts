import { gql } from "@apollo/client";

export const FETCH_USER_SKILLS_RATINGS = gql`
  query fetchUserSkillsRatings($userId: String = "") {
    intro_course_skills {
      createdAt
      id
      isVisible
      name
      unitId
      updatedAt
      intro_course_unit {
        title
      }
      intro_course_skills_users(where: { userId: { _eq: $userId } }) {
        id
        userId
        studentRating
      }
    }
  }
`;

export type FetchUserSkillsRatings = {
  intro_course_skills_user: Array<UserSkillsRatings>;
};

export type UserSkillsRatings = {
  id: String;
  studentRating: string;
  intro_course_skill: boolean;
};

export type SkillDescription = {
  name: String;
  id: string;
  unitId: boolean;
  intro_course_unit: CourseUnitDescription;
};

export type CourseUnitDescription = {
  title: string;
};
