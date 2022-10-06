import { gql } from "@apollo/client";

export const UPDATE_USER_GAMES_PLAYED_MCDATA = gql`
  mutation updateUserData($id: String = "") {
    update_multiplicationConnectData(
      where: { id: { _eq: $id } }
      _inc: { games_played: 1 }
    ) {
      returning {
        id
        games_played
      }
    }
  }
`;
