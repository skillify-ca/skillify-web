import { gql } from "@apollo/client";

export const INIT_USER_SKILLS = gql`
mutation initUserSkills($userId: String = "", $skillId:) {
  insert_user_skills(objects: 
    [
      {userId: $userId, skillId: $skillId, emoji: 101},
    ]
  ) {
    returning {
      id
    }
  }
}
`;

