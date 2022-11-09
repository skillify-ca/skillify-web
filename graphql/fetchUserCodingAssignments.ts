import { gql } from "@apollo/client";

export const FETCH_USER_CODING_ASSIGNMENTS = gql`
  query fetchUserCodingAssignments($userId: String = "") {
    user_coding_assignments(where: { userId: { _eq: $userId } }) {
        user_id
        assignment_id
        hasViewed
        id
        node_id
        submission_link
        template_link
        unit_id
    }
  }
`;

export const FETCH_USER_CODING_ASSIGNMENTS_DETAIL = gql`
  query fetchUserGoalDetail($userId: String = "", $id: uuid = "") {
    user_goals(
      where: { _and: [{ userId: { _eq: $userId } }, { id: { _eq: $id } }] }
    ) {
        user_id
        assignment_id
        hasViewed
        id
        node_id
        submission_link
        template_link
        unit_id
    }
  }
`;

export type FetchUserCodingAssignmentsDataResponse = {
  user_coding_assignments: Array<UserCodingAssignments>;
};

export type UserCodingAssignments = {
userId: string;
assignment_id: string;
hasViewed: boolean;
id: string;
node_id: number;  
submission_link: string;
template_link: string;
unit_id: number;
};
