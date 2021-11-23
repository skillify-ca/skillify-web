import { gql } from "@apollo/client";

export const ADD_GIZA_DATA = gql`
  mutation add_giza_data(
    $student_name: String
    $team_name: String
    $guesses: jsonb
    $guess_history: jsonb
    $start_time: bigint
    $end_time: bigint
  ) {
    insert_giza_student_grades(
      objects: {
        student_name: $student_name
        team_name: $team_name
        guesses: $guesses
        guess_history: $guess_history
        start_time: $start_time
        end_time: $end_time
      }
    ) {
      returning {
        id
        student_name
      }
    }
  }
`;
