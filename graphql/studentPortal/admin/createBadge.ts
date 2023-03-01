import { gql } from "@apollo/client";

export const CREATE_CODING_BADGE = gql`
  mutation createCodingBadge(
    $title: String = ""
    $description: String = ""
    $image: String = ""
    $unitId: Int = 0
  ) {
    insert_coding_badges(
      objects: [
        {
          title: $title
          description: $description
          image: $image
          intro_course_unit_id: $unitId
        }
      ]
    ) {
      returning {
        id
      }
    }
  }
`;
