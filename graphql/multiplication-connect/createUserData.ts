import { gql } from "@apollo/client";

export const CREATE_USER_MC_DATA = gql`
  mutation createUser($id: String = "wHZGkjB7CFf0cMrcGgI1pIHfke02") {
    insert_multiplicationConnectData(objects: { id: $id }) {
      affected_rows
    }
  }
`;
