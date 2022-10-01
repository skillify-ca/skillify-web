import { gql } from "@apollo/client";

/*- setup a mutation(?) to track the current user and add it to the table 
  - on save button click the user's id should be written to the Hasura database
  - setup this file to look like other gQL requests in this folder */

// Loads the data for the currently logged in user
// if(!id) fetch for: Kavan (test)
export const FETCH_USER_MC_DATA = gql`
  query fetchUserData($id: String = "wHZGkjB7CFf0cMrcGgI1pIHfke02") {
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
