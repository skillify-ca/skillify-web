import { gql } from "@apollo/client";

export type Users = {
  id: string;
  name: string;
  link: string;
  profile_image: string;
  created_at: string;
  current_badge: number;
  coding_badge: CodingBadge;
  user_coding_badges_aggregate: {
    aggregate: {
      count: number;
    };
  };
};

export type CodingBadge = {
  title: string;
  image: string;
};


export type FetchUserProfileCardResponse = {
  users: Array<Users>;
};
export const FETCH_USER_PROFILE_CARD = gql`
query fetchUsers {
  users(where: {enrolled: {_eq: true}}, order_by: {id: asc}) {
    id
    name
    link
    profile_image
    created_at
    current_badge
    coding_badge {
      title
      image
    }
    user_coding_badges_aggregate {
      aggregate {
        count
      }
    }
  }
}
`;
