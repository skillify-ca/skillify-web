// graphql query for inserting one project
import { gql } from "@apollo/client";

export const INSERT_PROJECT = gql`
  mutation MyMutation(
    $githubLink: String = ""
    $image: String = ""
    $name: String = ""
    $projectLink: String = ""
    $userId: String = ""
  ) {
    insert_user_projects_one(
      object: {
        githubLink: $githubLink
        image: $image
        name: $name
        projectLink: $projectLink
        userId: $userId
      }
    ) {
      id
    }
  }
`;
