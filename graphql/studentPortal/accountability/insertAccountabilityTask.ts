import { gql } from "@apollo/client";

export const INSERT_ACCOUNTABILITY_MUTATION = gql`
mutation InsertAccountabilityTask(
  $user_id: String!
  $topic: String!
  $subfield: String!
  $description: String!
) {
  insert_accountability_one(
    object: {
      user_id: $user_id,
      topic: $topic,
      subfield: $subfield,
      description: $description
    }
  ) {
    id
    user_id
    topic
    subfield
    description
  }
}
`;