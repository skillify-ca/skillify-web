import { gql } from "@apollo/client";

export const FETCH_SKILL_DESCRIPTION = gql`
  query fetchSkillDescription($skillId: Int) {
    skills(where: { id: { _eq: $skillId } }) {
      description
      id
    }
}
`;
