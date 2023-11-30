import { gql } from "@apollo/client";

export const FETCH_CODING_BADGES = gql`
  query fetchUserCodingBadges($userId: String = "") {
    user_coding_badges(where: { userId: { _eq: $userId } }) {
      coding_badge {
        image
        description
        title
        id
      }
      created_at
    }
  }
`;

type Response = {
  data: Data;
};

export type Data = {
  intro_course_unit: IntroCourseUnit[];
};

export type FetchBadgeResponse = {
  user_coding_badges: UserCodingBadge[];
};

export type IntroCourseUnit = {
  title: string;
  image: string;
  coding_badges: CodingBadge[];
};

export type CodingBadge = {
  title: string;
  image: string;
  description: string;
  id: number;
};

export type UserCodingBadge = {
  coding_badge: CodingBadge;
  created_at: string;
};
