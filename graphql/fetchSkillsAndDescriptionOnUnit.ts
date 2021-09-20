import { gql } from "@apollo/client";

export const FETCH_SKILLS_AND_DESCRIPTION_ON_UNIT = gql`
  query fetchSkillsAndDescription($unit: String = "") {
    skills(where: { unit: { _eq: $unit } }) {
      id
      description
    }
  }
`;
