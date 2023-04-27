import { gql } from "@apollo/client";

export const UPDATE_CAREER_QUIZ_EDUCATION_RESPONSE = gql`
  mutation UPDATE_CAREER_QUIZ_EDUCATION_RESPONSE(
    $id: Int!
    $education: String!
    $experience: String!
    $institution: String!
    $degree: String!
  ) {
    update_career_quiz(
      where: { id: { _eq: $id } }
      _set: {
        education: $education
        experience: $experience
        institution: $institution
        degree: $degree
      }
    ) {
      affected_rows
    }
  }
`;
