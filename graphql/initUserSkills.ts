import { gql } from "@apollo/client";

export const INIT_USER_SKILLS = gql`
mutation initUserSkills($userId: String = "") {
  insert_user_skills(objects: 
    [
      {userId: $userId, skillId: "332c6dfb-5ff6-416d-8134-a2cadb5035bd"},
      {userId: $userId, skillId: "158b6ebb-3cd9-4842-832b-e0437bf9804f"},
      {userId: $userId, skillId: "d99245af-1cfa-42bc-906e-620505139acf"},
      {userId: $userId, skillId: "9a6b909e-ab21-4704-8a15-bc34e49857c0"},
      {userId: $userId, skillId: "b7064bac-f884-4631-90f7-3d1a0cc66657"},
      {userId: $userId, skillId: "55642a7d-5abb-47da-84ad-845fa5eb10d1"},
      {userId: $userId, skillId: "fcba8ff1-c517-4176-8d57-798b1e8e4ffb"},
      {userId: $userId, skillId: "57553e3f-60a1-45d8-8795-18f080d678de"},
      {userId: $userId, skillId: "5859ea4c-53ce-48ff-a099-c518164cdef4"},
      {userId: $userId, skillId: "196453c2-0b5d-48e4-8726-d31c4fac3674"},
      {userId: $userId, skillId: "8eccb70d-436e-488d-bb1c-de9ddc280973"},
      {userId: $userId, skillId: "a5139286-58a2-454c-b19c-19f9bfbf1658"},
      {userId: $userId, skillId: "7a66ac87-de3c-4168-b68c-2ebc6b068cff"},
      {userId: $userId, skillId: "6538fb40-d168-46c4-8830-15562ce70051"},
      {userId: $userId, skillId: "f8c94eaa-d405-473f-b709-ea105877fbcb"},
      {userId: $userId, skillId: "6aa7774f-85d0-438f-a35f-04034ada4fe5"},
      {userId: $userId, skillId: "81d5ff9c-7789-480d-ad5d-d98af7d3cb98", locked: false},
    ]
  ) {
    returning {
      id
    }
  }
}
`;

