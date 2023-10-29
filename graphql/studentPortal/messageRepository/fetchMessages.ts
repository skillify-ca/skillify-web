import { gql } from "@apollo/client";

export const FETCH_ALL_MESSAGES  = gql` 
query fetchMessages{
    message_repository(order_by: { date: desc }) {
      message
      date
      id
    }
  }
`