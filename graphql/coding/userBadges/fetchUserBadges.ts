import { gql } from "@apollo/client";

export const FETCH_CODING_BADGES = gql`
  query FETCH_CODING_BADGES($userId: String = "Yxe3yn3BNhbSulbrnT3DI5bfrU93") {
    intro_course_unit(order_by: { order: asc }) {
      coding_badges(order_by: { id: asc }) {
        title
        id
        image
        user_coding_badges(where: { userId: { _eq: $userId } }) {
          id
        }
      }
      title
      image
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
  intro_course_unit: IntroCourseUnit[];
};

export type IntroCourseUnit = {
  title: string;
  image: string;
  coding_badges: CodingBadge[];
};

export type CodingBadge = {
  title: string;
  image: string;
  id: number;
  user_coding_badges: UserCodingBadge[];
};

export type UserCodingBadge = {
  id: number;
};
