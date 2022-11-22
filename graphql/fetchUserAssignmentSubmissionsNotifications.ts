import { gql } from "@apollo/client";
export const FETCH_USER_ASSIGNMENT_SUBMISSIONS_NOTIFICATIONS = gql`
query fetchUserAssignmentSubmissionsNotifications($user_id: String = "") {
    user_assignment_submissions(where: {user_id: {_eq: $user_id}, hasViewed: {_eq: false}, review_link: {_is_null: false}}) {
      submission_link
      id
      user_id
      last_updated
      hasViewed
      review_link
    }
  }
`;


  