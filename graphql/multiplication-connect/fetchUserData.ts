import { gql } from "@apollo/client";

// Loads the data for the currently logged in user
export const FETCH_USER_MC_DATA = gql`
  query fetchUserData($id: String = "") {
    multiplicationConnectData(where: { id: { _eq: $id } }) {
      win
      loss
      games_finished
      games_played
      lazy_count
      user_name
      user {
        name
      }
    }
  }
`;

export type FetchUserMCDataRes = {
  multiplicationConnectData: Array<UserMCData>;
};

export type UserMCData = {
  user_name: String;
  id: String;
  win: number;
  loss: number;
  games_played: number;
  games_finished: number;
  lazy_count: number;
  user: object;
};
