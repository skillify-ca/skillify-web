import { gql } from "@apollo/client";
export const FETCH_ALL_USER_ASSIGNMENTS = gql`
query fetchUserAssignmentSubmissions($user_id: String = "") {
    user_assignment_submissions(where: {user_id: {_eq: $user_id}}) {
      submission_link
      id
      user_id
      last_updated
      review_link
      coding_assignment {
        assignment_name
      }
    }
  }
`;

export type FetchAllUserAssignmentSubmissionsDataResponse = {
    user_assignment_submissions: Array<AllUserAssignmentSubmissionsData>;
  };

export type AllUserAssignmentSubmissionsData = {
    id: string;
    user_id: string;
    submission_link: string;
    last_updated: Date;
    review_link: string;
    assignmentId: string;
    coding_assignment: UserCodingAssignmentsData;
  };

export type UserCodingAssignmentsData = {
    assignment_name: string;
}
