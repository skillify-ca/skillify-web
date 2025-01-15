import { gql } from "@apollo/client";

export const UPDATE_USER_SKILL_RATING = gql`
  mutation updateUserSkillRating(
    $userSkillId: uuid = ""
    $studentRating: Int = 0
  ) {
    update_intro_course_skills_user(
      where: { id: { _eq: $userSkillId } }
      _set: { studentRating: $studentRating }
    ) {
      affected_rows
    }
  }
`;

export type UpdateUserSkillRatingArgs = {
  userSkillId: string;
  studentRating: number;
};
