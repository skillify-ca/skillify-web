import { gql } from "@apollo/client";
export const FETCH_USER_ASSIGNMENT_SUBMISSIONS = gql`
  query fetchUserAssignmentSubmissions(
    $user_id: String = ""
    $assignmentId: uuid = ""
  ) {
    user_assignment_submissions(
      where: {
        user_id: { _eq: $user_id }
        assignment_id: { _eq: $assignmentId }
      }
    ) {
      submission_link
      id
      user_id
      last_updated

      hasViewed
      review_link
    }
  }
`;
export type FetchUserAssignmentSubmissionsDataResponse = {
  user_assignment_submissions: Array<UserAssignmentSubmissionsData>;
};
export type UserAssignmentSubmissionsData = {
  id: string;
  user_id: string;
  submission_link: string;
  last_updated: Date;
  hasViewed: boolean;
  review_link: string;
  assignmentId: string;
};
