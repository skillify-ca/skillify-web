import { gql } from "@apollo/client";

export const FETCH_USER_SKILLS = gql`
query fetchUserSkills {
  user_skills(order_by: {skill: {created_at: asc, title: asc}}, where: {userId: {_eq: "1"}}) {
    skill {
      title
      id
      image
    }
    locked
    stars
  }
}
`;
