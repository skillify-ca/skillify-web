import { gql } from "@apollo/client";

export const FETCH_CODING_BADGES = gql`
query FETCH_CODING_BADGES($userId: String = "") {
    intro_course_unit {
      coding_badges(order_by: {id: asc}) {
        title
        id
        user_coding_badges(where: {userId: {_eq: $userId}}) {
          id
        }
      }
      title
    }
  }
    
`;

type Response = {
    data: Data;
  };
  
  export type Data = {
    intro_course_unit: IntroCourseUnit[];
  };

  export type IntroCourseUnit = {
    title: string;
    coding_badges: CodingBadge[];
  };

  export type CodingBadge = {
      title:string;
      id: number;
      user_coding_badges:UserCodingBadge[]
  }

  export type UserCodingBadge = {
      id: number;
  }