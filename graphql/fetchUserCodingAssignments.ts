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
  user_goals: Array<UserCodingAssignments>;
};

export type UserCodingAssignments = {
userId: string;
assignmentId: string;
hasViewed: boolean;
id: string;
nodeId: number;  
submissionLink: string;
templateLink: string;
unitId: number;
};
