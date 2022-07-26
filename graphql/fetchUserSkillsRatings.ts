import { gql } from "@apollo/client";

export const FETCH_USER_SKILLS_RATINGS = gql`
  query fetchUserSkillsRatings($userId: String = "") {
    intro_course_skills {
      id
      isVisible
      name
      unitId
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

export type FetchUserSkillsDBResponse = {
  intro_course_skills: Array<UserSkills>;
};

export type UserSkills = {
  name: String;
  id: string;
  unitId: boolean;
  intro_course_unit: CourseUnitDescription;
  intro_course_skills_users: Array<UserSkillsRatings>;
};

export type UserSkillsRatings = {
  id: String;
  studentRating: string;
  // intro_course_skill: boolean;
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

// old types

export type FetchUserSkillsRatings = {
  intro_course_skills_user: Array<UserSkillsRatings>;
};
