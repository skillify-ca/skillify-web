import { gql } from "@apollo/client";

export const FETCH_USER_SKILLS_RATINGS = gql`
  query fetchUserSkillsRatings($userId: String = "") {
    intro_course_skills_user(where: { userId: { _eq: $userId } }) {
      id
      studentRating
      intro_course_skill {
        name
        id
        unitId
        intro_course_unit {
          title
        }
      }
    }
  }
`;

export type FetchUserSkillsRatings = {
  intro_course_skills_user: Array<UserSkillsRatings>;
};

export type UserSkillsRatings = {
  id: string;
  studentRating: string;
  intro_course_skill: SkillDescription;
};

export type SkillDescription = {
  name: string;
  id: string;
  unitId: boolean;
  intro_course_unit: CourseUnitDescription;
};

export type CourseUnitDescription = {
  title: string;
};
