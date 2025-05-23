import { gql } from "@apollo/client";

// Ignore unit 34 (The Community Unit)
export const FETCH_COACHES = gql`
  query fetchCoaches {
    coaches {
      user {
        id
        name
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
  id: string;
};
