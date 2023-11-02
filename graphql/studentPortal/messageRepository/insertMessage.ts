import { gql } from "@apollo/client";

export const insert_Message = gql`
  mutation MyMutation($message: String = "", $date: timestamp = "", $userId: String ) {
    insert_message_repository_one(object: { message: $message, date: $date, userId : $userId }) {
      message
      date
      userId
    }
  }
`;
