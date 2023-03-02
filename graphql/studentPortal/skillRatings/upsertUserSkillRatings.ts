import { gql } from "@apollo/client";

export const UPSERT_USER_SKILL_RATINGS = gql`
  mutation upsertUserSkillRatings(
    $objects: [intro_course_skills_user_insert_input!]!
  ) {
    insert_intro_course_skills_user(
      objects: $objects
      on_conflict: {
        constraint: intro_course_skills_user_pkey
        update_columns: [studentRating]
      }
    ) {
      affected_rows
      returning {
        skillId
        userId
        studentRating
      }
    }
  }
`;
