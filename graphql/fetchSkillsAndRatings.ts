import { gql } from "@apollo/client";

export const FETCH_SKILLS_AND_RATINGS = gql`
query fetchSkillsAndRatings($userId: String = "") {
    intro_course_skills {
      id
      name
      intro_course_unit {
        title
      }
      intro_course_skills_users_aggregate(where: { userId: { _eq: $userId } }) {
        nodes {
          studentRating
          }
        }
      }
    }
`;

export type FetchSkillsAndRatings = {
  intro_course_skills: SkillsAndRatings
};

export type SkillsAndRatings = {
  id: string;
  name: string;
  intro_course_unit: SkillDescription;
  intro_course_skills_users_aggregate: NodeSkillRatings;
};

export type SkillDescription = {
  unitTitle: string;
};

export type NodeSkillRatings = {
  studentRating: number;
};

