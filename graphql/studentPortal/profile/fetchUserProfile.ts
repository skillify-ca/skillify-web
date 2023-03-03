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

export const FETCH_USER_PROFILE_DATA = gql`
  query fetchUserProfileData($userId: String = "") {
    users(where: { id: { _eq: $userId } }) {
      created_at
      email
      last_seen
      name
      profile_image
    }
  }
`;

export type FetchUserProfileDataResponse = {
  users: Array<UserProfileResponse>;
};

export type UserProfileResponse = {
  __typename: string;
  created_at: Date;
  email: string;
  last_seen: Date;
  name: string;
  profile_image: string;
};

export type UserProfileData = {
  createdAt: Date;
  email: string;
  lastSeen: Date;
  name: string;
  profileImage: string;
};

export type User = {
  uid: string;
  email: string;
  emailVerified: boolean;
  displayName: string;
  isAnonymous: boolean;
  photoURL: string;
  providerData: {
    providerId: string;
    uid: string;
    displayName: string;
    email: string;
    phoneNumber: string | null;
    photoURL: string;
  }[];
  stsTokenManager: {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
  };
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
};
