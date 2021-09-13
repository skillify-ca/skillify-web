import { gql } from "@apollo/client";

export const UPDATE_USER_ASSIGNMENT_IMAGES = gql`
  mutation updateUserAssignmentImages(
    $user_id: String
    $assignment_id: String
    $user_images: jsonb
  ) {
    update_user_assignments(
      where: {
        assignment_id: { _eq: $assignment_id }
        user_id: { _eq: $user_id }
      }
      _set: {
        user_images: $user_images
      }
    ) {
      returning {
        id
        user_images
      }
    }
  }
`;
