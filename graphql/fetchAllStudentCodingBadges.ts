import { gql } from "@apollo/client";

export const FETCH_ALL_STUDENT_CODING_BADGES = gql`
  query fetchAllStudentsCodingBadges {
    user_coding_badges(order_by: { badgeId: asc, userId: asc }) {
      userId
      badgeId
      locked
    }
  }
`;
