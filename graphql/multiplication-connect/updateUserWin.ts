import { gql } from "@apollo/client";

export const UPDATE_USER_WIN_MCDATA = gql`
  mutation updateUserData($id: String = "") {
    update_multiplicationConnectData(
      where: { id: { _eq: $id } }
      _inc: { win: 1, games_finished: 1 }
    ) {
      returning {
        id
        win
        loss
      }
    }
  }
`;
