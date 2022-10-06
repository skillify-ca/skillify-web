import { gql } from "@apollo/client";

export const CREATE_USER_MC_DATA = gql`
  mutation createUser($id: String = "") {
    insert_multiplicationConnectData(objects: { id: $id }) {
      affected_rows
    }
  }
`;
