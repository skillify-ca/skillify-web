import { gql } from "@apollo/client";

export const CREATE_CODING_BADGE = gql`
  mutation createCodingBadge(
    $title: String = ""
    $description: String = ""
    $image: String = ""
  ) {
    insert_coding_badges(
      objects: [{ title: $title, description: $description, image: $image }]
    ) {
      returning {
        id
      }
    }
  }
`;
