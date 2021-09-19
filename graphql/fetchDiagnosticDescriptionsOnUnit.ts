import { gql } from "@apollo/client";

export const FETCH_DIAGNOSTIC_DESCRIPTION_ON_UNIT = gql`
  query DiagnosticDescriptions($unit: String = "") {
    diagnostic(where: { unit: { _eq: $unit } }) {
      description
      grade
      id
    }
  }
`;
