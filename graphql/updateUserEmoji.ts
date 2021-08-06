import { gql } from "@apollo/client";

export const UPDATE_USER_SKILL_EMOJI = gql`
mutation UpdateUserEmoji($skillId: Int = 0, $userId: String = "", $emoji: Int = null) {
  update_user_skills(where: {user_id: {_eq: $userId}, skill_id: {_eq: $skillId}}, _set: {emoji: $emoji, updated_at: "now()"}) {
    returning {
      emoji
    }
  }
}
`;
