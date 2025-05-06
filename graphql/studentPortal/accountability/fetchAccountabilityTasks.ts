import { gql } from '@apollo/client';

export const FETCH_ACCOUNTABILITY_TASKS_BY_USER = gql`
  query AccountabilityByUser($userId: String!) {
    accountability(where: { user_id: { _eq: $userId } }) {
       creationDate
       isCompleted
    }
  }
`;

export type FetchAccountabilityTasksByUser = {
  accountability: Array<AccountabilityTask>;
}

export type AccountabilityTask = {
  creationDate: string;
  isCompleted: boolean | null;
}