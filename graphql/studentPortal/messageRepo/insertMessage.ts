import { gql } from "@apollo/client";

export const insert_Message = gql`
mutation MyMutation($reachout_message: String = "", $date: timestamp = "") {
    insert_message_repository_one(object: {reachout_message: $reachout_message, date: $date}) {
      reachout_message
      date
    }
  }
  
  
`;


