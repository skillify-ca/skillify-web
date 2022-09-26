import { gql } from "@apollo/client";

export const UPDATE_GAME_LEVEL = gql`
  mutation updateLevel(
    $userId: String = ""
    $currentLevel: Int = ""
  ) {
    update_users(
      where: { id: { _eq: $userId }, completed: { _eq: $completed } }
      _set: { currentLevel: currentLevel}
    ) {
      affected_rows
    }
  }
`;
