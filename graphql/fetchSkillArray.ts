import { gql } from "@apollo/client";

export const FETCH_SKILL_ARRAY = gql`
query fetchSkillDescription($skillId: [Int!]! = []) {
    skills(where: { id: { _in: $skillId } }) {
      description
      id
    }
}

`;
