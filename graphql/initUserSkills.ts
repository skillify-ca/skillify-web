import { gql } from "@apollo/client";

export const INIT_USER_SKILLS = gql`
mutation initUserSkills($userId: String = "") {
  insert_user_skills(
    objects: [
      { user_id: $userId, skill_id: 1, emoji: null }
      { user_id: $userId, skill_id: 2, emoji: null }
      { user_id: $userId, skill_id: 3, emoji: null }
      { user_id: $userId,  skill_id: 4, emoji: null }
      { user_id: $userId, skill_id: 34, emoji: null }
      { user_id: $userId, skill_id: 35, emoji: null }
      { user_id: $userId,  skill_id: 36, emoji: null }
      { user_id: $userId,  skill_id: 37, emoji: null }
      { user_id: $userId,  skill_id: 38, emoji: null }
      { user_id: $userId, skill_id: 39, emoji: null }
      { user_id: $userId,  skill_id: 40, emoji: null }
      { user_id: $userId, skill_id: 41, emoji: null }       
    ]
  ) {
    returning {
      skill_id
    }
  }
}
`;

