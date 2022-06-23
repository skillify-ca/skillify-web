import { gql } from "@apollo/client";

export const FETCH_USER_PROFILE = gql`
  query fetchUserProfile($userId: String = "", $courseId: String = "") {
    user_badges(
      where: {
        userId: { _eq: $userId }
        badge: { courseId: { _eq: $courseId } }
      }
      order_by: { badgeId: asc }
    ) {
      badge {
        title
        image
        id
        description
        courseId
      }
      locked
    }
    user_skills(
      where: { user_id: { _eq: $userId } }
      order_by: { skill_id: asc }
    ) {
      emoji
      skill {
        title
        level
      }
    }
  }
`;

export const FETCH_USER_PROFILE_METADATA = gql`
  query fetchUserProfileMetadata($userId: String = "") {
    users(where: { id: { _eq: $userId } }) {
      created_at
      email
      last_seen
      name
      profile_image
      username
    }
  }
`;

export type FetchUserProfileMetadataResponse = {
  users: Array<UserProfileMetadata>;
};

export type UserProfileMetadata = {
  __typename: string;
  created_at: Date;
  email: string;
  last_seen: Date;
  name: string;
  profile_image: string;
};
