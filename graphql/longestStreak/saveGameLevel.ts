import { gql } from "@apollo/client";

export const SAVE_GAME_LEVEL = gql`
  mutation saveGameLevel(
    $gameLevelArray: [game_level_insert_input!]! = {}
  ) {
    insert_game_level(objects: $gameLevelArray) {
      affected_rows
    }
  }
`;
