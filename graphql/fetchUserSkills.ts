import { gql } from "@apollo/client";

export const FETCH_USER_SKILLS = gql`
  query fetchUserSkills {
    user_skills {
      stars
      locked
      skill {
        id
        image
        title
      }
    }
  }
`;
