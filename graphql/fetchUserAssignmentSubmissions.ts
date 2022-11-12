import { gql } from "@apollo/client";

export const FETCH_USER_ASSIGNMENT_SUBMISSIONS = gql`
  query fetchUserAssignmentSubmissions($user_id: String = "") {
    user_assignment_submissions(where: { user_id: { _eq: $user_id } }) {
      submission_link
      id
      user_id
      last_updated
    }
  }
`;


export type FetchUserAssignmentSubmissionssDataResponse = {
  user_assignment_submissions: Array<UserAssignmentSubmissions>;
};

export type UserAssignmentSubmissions = {
  id: string;
  user_id: string;
  submission_link: string;
  last_updated: Date;
};
