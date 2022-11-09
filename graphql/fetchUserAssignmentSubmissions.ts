import { gql } from "@apollo/client";

export const FETCH_USER_ASSIGNMENT_SUBMISSIONS = gql`
  query fetchUserAssignmentSubmissions($userId: String = "") {
    user_assignment_submissions(where: { userId: { _eq: $userId } }) {
        user_id
        id
        submission_link
    }
  }
`;

export const FETCH_USER_ASSIGNMENT_SUBMISSIONS_DETAIL = gql`
  query fetchUserAssignmentSubmissionsDetail($userId: String = "", $id: uuid = "") {
    user_goals(
      where: { _and: [{ userId: { _eq: $userId } }, { id: { _eq: $id } }] }
    ) {
        user_id
        id
        submission_link
    }
  }
`;

export type FetchUserAssignmentSubmissionsDataResponse = {
  user_coding_assignments: Array<UserAssignmentSubmissions>;
};

export type UserAssignmentSubmissions = {
user_id: string;
id: string;
node_id: number;  
submission_link: string;
};
