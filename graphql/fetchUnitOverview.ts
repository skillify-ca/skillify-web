import { gql } from "@apollo/client";

export const FETCH_UNIT_OVERVIEW = gql`
  query fetchUnitOverview(
    $userId: String = ""
    $badgeId: Int = 0
    $skillId: [Int!]! = []
  ) {
    user_quizzes(
      where: { userId: { _eq: $userId }, badgeId: { _eq: $badgeId } }
    ) {
      accuracy
      createdAt
    }
    user_skills(
      where: {
        user_id: { _eq: $userId }
        _and: { skill_id: { _in: $skillId } }
      }
    ) {
      emoji
      skill_id
    }
    user_badges(
      where: { userId: { _eq: $userId }, badgeId: { _eq: $badgeId } }
    ) {
      badge {
        image
      }
      locked
    }
  }
`;
