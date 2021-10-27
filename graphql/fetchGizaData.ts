import { gql } from "@apollo/client";

export const FETCH_GIZA_DATA = gql`
  query MyQuery {
    giza_student_grades(order_by: { id: asc }) {
      id
      student_name
      guesses
      team_name
      start_time
      end_time
      guess_history
    }
  }
`;
