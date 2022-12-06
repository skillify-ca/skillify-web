import { gql } from "@apollo/client";
import React from "react";
export type Users = {
  id: string;
  name: string;
  link: string;
  profile_image: string;
  badges_earned: number;
  created_at: string;
};

export type FetchUserProfileCardResponse = {
  users: Array<Users>;
};
export const FETCH_USER_PROFILE_CARD = gql`
  query fetchUsers {
    users(where: { enrolled: { _eq: true } }) {
      id
      name
      link
      profile_image
      badges_earned
      created_at
    }
  }
`;
