import { SkillsAndRatings } from "../../graphql/fetchSkillsAndRatings";
import { SkillRatingsRow } from "../../redux/skillRatingsSlice";
import { transformSkillsAndRatings } from "./skillRatingsFunctions";

test("Test transformSkillRating function - users with no ratings", async () => {
    //Arrange
    const skillRatings:SkillsAndRatings[] =
    [
        {
          "id": "9657d0b2-696d-4575-9f0a-b2f2c5394306",
          "name": "I can use <h1> tags to display text",
          "intro_course_skills_users": [],
          "intro_course_unit": {
            "title": "HTML"
          },
          "intro_course_skills_users_aggregate": {
            "nodes": []
          }
        },
        {
            "id": "4e4329ee-6726-4bb1-bdbd-05fdc2a40d2b",
            "name": "I can use <p> tags to display text",
            "intro_course_skills_users": [],
            "intro_course_unit": {
              "title": "HTML"
            },
            "intro_course_skills_users_aggregate": {
              "nodes": []
            }
          },
    ];


   // Mocking Math.random to always return 0.5
const mockMath = Object.create(global.Math);
mockMath.random = jest.fn(() => 0.5);
global.Math = mockMath;

    const noStudentRatings:SkillRatingsRow[] = [
        {
        "userSkillId": 0.5,
        "skillId": "9657d0b2-696d-4575-9f0a-b2f2c5394306",
        "skillName": "I can use <h1> tags to display text",
        "unitName": "HTML",
        "studentRating": 0},
        {
            "userSkillId": 0.5,
            "skillId": "4e4329ee-6726-4bb1-bdbd-05fdc2a40d2b",
            "skillName": "I can use <p> tags to display text",
            "unitName": "HTML",
            "studentRating": 0},
    ]
    //Act
    const result = transformSkillsAndRatings(skillRatings);
    //Assert
    expect(result).toStrictEqual(noStudentRatings);
  });

  test("Test transformSkillRating function - users with all ratings", async () => {
    //Arrange
    const skillRatings:SkillsAndRatings[] =
    [
        {
          "id": "9657d0b2-696d-4575-9f0a-b2f2c5394306",
          "name": "I can use <h1> tags to display text",
          "intro_course_skills_users": [
            {
              "id": "d5f73150-3946-436e-8505-54826e15a7c7"
            },
            {
              "id": "57c21c9c-d7f0-4dde-87f0-ddfb5d2c07d1"
            }
          ],
          "intro_course_unit": {
            "title": "HTML"
          },
          "intro_course_skills_users_aggregate": {
            "nodes": [
                {
                  "studentRating": "30"
                }
              ]
          }
        },
        {
            "id": "4e4329ee-6726-4bb1-bdbd-05fdc2a40d2b",
            "name": "I can use <p> tags to display text",
            "intro_course_skills_users": [
                {
                  "id": "e4fc1d79-e556-44d3-b5cb-2829ec845cf2"
                },
                {
                  "id": "f04812fc-e010-479c-a64b-795b4230b109"
                }
              ],
            "intro_course_unit": {
              "title": "HTML"
            },
            "intro_course_skills_users_aggregate": {
              "nodes": [
                {
                  "studentRating": "15"
                }
              ]
            }
          },
    ];

    const allStudentRatings:SkillRatingsRow[] = [
        {
        "userSkillId": "d5f73150-3946-436e-8505-54826e15a7c7",
        "skillId": "9657d0b2-696d-4575-9f0a-b2f2c5394306",
        "skillName": "I can use <h1> tags to display text",
        "unitName": "HTML",
        "studentRating": 30},
        {
            "userSkillId": "e4fc1d79-e556-44d3-b5cb-2829ec845cf2",
            "skillId": "4e4329ee-6726-4bb1-bdbd-05fdc2a40d2b",
            "skillName": "I can use <p> tags to display text",
            "unitName": "HTML",
            "studentRating": 15},
    ]
    //Act
    const result = transformSkillsAndRatings(skillRatings);
    //Assert
    expect(result).toStrictEqual(allStudentRatings);
  });

  test("Test transformSkillRating function - users with partial ratings", async () => {
    //Arrange
    const skillRatings:SkillsAndRatings[] =
    [
        {
          "id": "9657d0b2-696d-4575-9f0a-b2f2c5394306",
          "name": "I can use <h1> tags to display text",
          "intro_course_skills_users": [
            {
              "id": "d5f73150-3946-436e-8505-54826e15a7c7"
            },
            {
              "id": "57c21c9c-d7f0-4dde-87f0-ddfb5d2c07d1"
            }
          ],
          "intro_course_unit": {
            "title": "HTML"
          },
          "intro_course_skills_users_aggregate": {
            "nodes": [
                {
                  "studentRating": "30"
                }
              ]
          }
        },
        {
            "id": "4e4329ee-6726-4bb1-bdbd-05fdc2a40d2b",
            "name": "I can use <p> tags to display text",
            "intro_course_skills_users": [],
            "intro_course_unit": {
              "title": "HTML"
            },
            "intro_course_skills_users_aggregate": {
              "nodes": []
            }
          },
    ];


   //Mocking Math.random to always return 0.5
const mockMath = Object.create(global.Math);
mockMath.random = jest.fn(() => 0.5);
global.Math = mockMath;

    const partialStudentRatings:SkillRatingsRow[] = [
        {
        "userSkillId": "d5f73150-3946-436e-8505-54826e15a7c7",
        "skillId": "9657d0b2-696d-4575-9f0a-b2f2c5394306",
        "skillName": "I can use <h1> tags to display text",
        "unitName": "HTML",
        "studentRating": 30},
        {
            "userSkillId": 0.5,
            "skillId": "4e4329ee-6726-4bb1-bdbd-05fdc2a40d2b",
            "skillName": "I can use <p> tags to display text",
            "unitName": "HTML",
            "studentRating": 0},
    ]
    //Act
    const result = transformSkillsAndRatings(skillRatings);
    //Assert
    expect(result).toStrictEqual(partialStudentRatings);
  });