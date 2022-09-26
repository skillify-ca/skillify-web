import { gql } from "@apollo/client";

export const COMPLETE_GAME_LEVEL = gql`
  mutation completeGameLevel(
    $user_id: String = ""
    $completeLevel: Int
    $completed: Boolean
  ) {
    save_game_level(
      where: { user_id: { _eq: $user_id }, completeLevel: { _eq: $completeLevel } }
      _set: { completed: $completed }
    ) {
      affected_rows
    }
  }
`;
