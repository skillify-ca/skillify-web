import { gql } from "@apollo/client";

export const FETCH_SKILLS_FOR_UNIT = gql`
  query fetchSkillsForUnit($unit: String = "") {
    skills(where: { unit: { _eq: $unit } }) {
      grade
      id
      description
      unit
      published
    }
  }
`;
