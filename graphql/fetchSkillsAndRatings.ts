import { gql } from "@apollo/client";

export const FETCH_SKILLS_AND_RATINGS = gql`
query fetchAllSkillsAndExistingRatings($userId: String = "") {
    intro_course_skills {
      id
      name
      intro_course_skills_users {
        id
      }
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
  intro_course_skills: SkillsAndRatings[]
};

export type SkillsAndRatings = {
  id: string;
  name: string;
  intro_course_skills_users: UserSkillIds[];
  intro_course_unit: SkillDescription;
  intro_course_skills_users_aggregate: NodeSkillRatings[];
};

export type UserSkillIds = {
    id: string;
  };

export type SkillDescription = {
  title: string;
};

export type NodeSkillRatings = {
  nodes: StudentRatings;
};
export type StudentRatings = {
    studentRating: string;
  };
