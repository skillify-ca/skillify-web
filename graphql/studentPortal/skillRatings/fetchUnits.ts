import { gql } from "@apollo/client";

export const FETCH_UNITS = gql`
  query fetchUnits {
    intro_course_unit(order_by: { order: asc }) {
      title
    }
  }
`;
