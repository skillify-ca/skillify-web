import { gql } from '@apollo/client';

export const GET_ACCOUNTABILITY_TASKS_BY_USER = gql`
  query AccountabilityByUser($userId: String!) {
    accountability(where: { user_id: { _eq: $userId } }) {
       creationDate
       isCompleted
    }
  }
`;