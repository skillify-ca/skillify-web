import { gql } from "@apollo/client";

export const FETCH_ALL_SKILLS = gql`
query fetchAllSkills{
  intro_course_skills{
    id
  }
}
`;

export type FetchAllSkills = {
  intro_course_skills: Array<{id: string}>;
};
