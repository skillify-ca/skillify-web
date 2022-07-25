import { gql } from "@apollo/client";

// Ignore unit 34 (The Community Unit)
export const FETCH_COACHES = gql`
  query fetchCoaches {
    coaches {
      user {
        name
        profile_image
      }
      competencies
      link
    }
  }
`;

// export type FetchCoachesResponse = {
//   data: Data;
// };

export type FetchCoachesResponse = {
  coaches: Coach[];
};

export type Coach = {
  link: string;
  competencies: string;
  user: User;
};

type User = {
  name: string;
  profile_image: string;
};
