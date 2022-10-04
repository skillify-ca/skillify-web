import { gql } from "@apollo/client";

// see if this can be reworked to take an input to increment a different stat
export const UPDATE_USER_MC_DATA = gql`
  mutation updateUserData($id: String = "wHZGkjB7CFf0cMrcGgI1pIHfke02") {
    update_multiplicationConnectData(
      where: { id: { _eq: $id } }
      _inc: { win: 1 }
    ) {
      returning {
        id
        win
        loss
      }
    }
  }
`;
