import { SkillsAndRatings } from "../../graphql/studentPortal/skillRatings/fetchSkillsAndRatings";
import { User } from "../../graphql/studentPortal/profile/fetchUserProfile";
import { SkillRatingsRow } from "../../redux/skillRatingsSlice";
import {
  transformSkillRatingForDB,
  transformSkillsAndRatings,
} from "./skillRatingsFunctions";

test("Test transformSkillsAndRatings function - users with no ratings", async () => {
  //Arrange
  const skillRatings: SkillsAndRatings[] = [
    {
      id: "9657d0b2-696d-4575-9f0a-b2f2c5394306",
      name: "I can use <h1> tags to display text",
      intro_course_skills_users: [],
      intro_course_unit: {
        title: "HTML",
      },
      intro_course_skills_users_aggregate: {
        nodes: [],
      },
    },
    {
      id: "4e4329ee-6726-4bb1-bdbd-05fdc2a40d2b",
      name: "I can use <p> tags to display text",
      intro_course_skills_users: [],
      intro_course_unit: {
        title: "HTML",
      },
      intro_course_skills_users_aggregate: {
        nodes: [],
      },
    },
  ];

  // Mocking Math.random to always return 0.5
  const mockMath = Object.create(global.Math);
  mockMath.random = jest.fn(() => 0.5);
  global.Math = mockMath;

  const noStudentRatings: SkillRatingsRow[] = [
    {
      userSkillId: 0.5,
      skillId: "9657d0b2-696d-4575-9f0a-b2f2c5394306",
      skillName: "I can use <h1> tags to display text",
      unitName: "HTML",
      studentRating: 0,
    },
    {
      userSkillId: 0.5,
      skillId: "4e4329ee-6726-4bb1-bdbd-05fdc2a40d2b",
      skillName: "I can use <p> tags to display text",
      unitName: "HTML",
      studentRating: 0,
    },
  ];
  //Act
  const result = transformSkillsAndRatings(skillRatings);
  //Assert
  expect(result).toStrictEqual(noStudentRatings);
});

test("Test transformSkillsAndRatings function - users with all ratings", async () => {
  //Arrange
  const skillRatings: SkillsAndRatings[] = [
    {
      id: "9657d0b2-696d-4575-9f0a-b2f2c5394306",
      name: "I can use <h1> tags to display text",
      intro_course_skills_users: [
        {
          id: "d5f73150-3946-436e-8505-54826e15a7c7",
        },
        {
          id: "57c21c9c-d7f0-4dde-87f0-ddfb5d2c07d1",
        },
      ],
      intro_course_unit: {
        title: "HTML",
      },
      intro_course_skills_users_aggregate: {
        nodes: [
          {
            studentRating: "30",
          },
        ],
      },
    },
    {
      id: "4e4329ee-6726-4bb1-bdbd-05fdc2a40d2b",
      name: "I can use <p> tags to display text",
      intro_course_skills_users: [
        {
          id: "e4fc1d79-e556-44d3-b5cb-2829ec845cf2",
        },
        {
          id: "f04812fc-e010-479c-a64b-795b4230b109",
        },
      ],
      intro_course_unit: {
        title: "HTML",
      },
      intro_course_skills_users_aggregate: {
        nodes: [
          {
            studentRating: "15",
          },
        ],
      },
    },
  ];

  const allStudentRatings: SkillRatingsRow[] = [
    {
      userSkillId: "d5f73150-3946-436e-8505-54826e15a7c7",
      skillId: "9657d0b2-696d-4575-9f0a-b2f2c5394306",
      skillName: "I can use <h1> tags to display text",
      unitName: "HTML",
      studentRating: 30,
    },
    {
      userSkillId: "e4fc1d79-e556-44d3-b5cb-2829ec845cf2",
      skillId: "4e4329ee-6726-4bb1-bdbd-05fdc2a40d2b",
      skillName: "I can use <p> tags to display text",
      unitName: "HTML",
      studentRating: 15,
    },
  ];
  //Act
  const result = transformSkillsAndRatings(skillRatings);
  //Assert
  expect(result).toStrictEqual(allStudentRatings);
});

test("Test transformSkillsAndRatings function - users with partial ratings", async () => {
  //Arrange
  const skillRatings: SkillsAndRatings[] = [
    {
      id: "9657d0b2-696d-4575-9f0a-b2f2c5394306",
      name: "I can use <h1> tags to display text",
      intro_course_skills_users: [
        {
          id: "d5f73150-3946-436e-8505-54826e15a7c7",
        },
        {
          id: "57c21c9c-d7f0-4dde-87f0-ddfb5d2c07d1",
        },
      ],
      intro_course_unit: {
        title: "HTML",
      },
      intro_course_skills_users_aggregate: {
        nodes: [
          {
            studentRating: "30",
          },
        ],
      },
    },
    {
      id: "4e4329ee-6726-4bb1-bdbd-05fdc2a40d2b",
      name: "I can use <p> tags to display text",
      intro_course_skills_users: [],
      intro_course_unit: {
        title: "HTML",
      },
      intro_course_skills_users_aggregate: {
        nodes: [],
      },
    },
  ];

  //Mocking Math.random to always return 0.5
  const mockMath = Object.create(global.Math);
  mockMath.random = jest.fn(() => 0.5);
  global.Math = mockMath;

  const partialStudentRatings: SkillRatingsRow[] = [
    {
      userSkillId: "d5f73150-3946-436e-8505-54826e15a7c7",
      skillId: "9657d0b2-696d-4575-9f0a-b2f2c5394306",
      skillName: "I can use <h1> tags to display text",
      unitName: "HTML",
      studentRating: 30,
    },
    {
      userSkillId: 0.5,
      skillId: "4e4329ee-6726-4bb1-bdbd-05fdc2a40d2b",
      skillName: "I can use <p> tags to display text",
      unitName: "HTML",
      studentRating: 0,
    },
  ];
  //Act
  const result = transformSkillsAndRatings(skillRatings);
  //Assert
  expect(result).toStrictEqual(partialStudentRatings);
});

test("Test transformSkillRatingforDB function - users with random number generated userSkillId and a DB generated userSkillId", async () => {
  //Arrange
  const skillRatings: SkillRatingsRow[] = [
    {
      userSkillId: "d5f73150-3946-436e-8505-54826e15a7c7",
      skillId: "9657d0b2-696d-4575-9f0a-b2f2c5394306",
      skillName: "I can use <h1> tags to display text",
      unitName: "HTML",
      studentRating: 30,
    },
    {
      userSkillId: 0.5,
      skillId: "4e4329ee-6726-4bb1-bdbd-05fdc2a40d2b",
      skillName: "I can use <p> tags to display text",
      unitName: "HTML",
      studentRating: 0,
    },
  ];

  const userId: User = {
    uid: "dummyUser",
    email: "dummyEmail",
    emailVerified: true,
    displayName: "dummyName",
    isAnonymous: false,
    photoURL: "dummyURL",
    providerData: [
      {
        providerId: "dummyProviderId",
        uid: "dummyUid",
        displayName: "dummyDisplayName",
        email: "dummyEmail",
        phoneNumber: null,
        photoURL: "dummyPhoto",
      },
    ],
    stsTokenManager: {
      refreshToken: "dummyToken",
      accessToken: "dummyToken",
      expirationTime: 2,
    },
    createdAt: "dummyTime",
    lastLoginAt: "dummyTime",
    apiKey: "dummyKey",
    appName: "dummyName",
  };

  const generatedUserSkillId = [
    {
      userId: "dummyUser",
      id: "d5f73150-3946-436e-8505-54826e15a7c7",
      skillId: "9657d0b2-696d-4575-9f0a-b2f2c5394306",
      studentRating: 30,
    },
    {
      userId: "dummyUser",
      skillId: "4e4329ee-6726-4bb1-bdbd-05fdc2a40d2b",
      studentRating: 0,
    },
  ];

  //Act
  const result = transformSkillRatingForDB(skillRatings, userId);
  //Assert
  expect(result).toStrictEqual(generatedUserSkillId);
});
