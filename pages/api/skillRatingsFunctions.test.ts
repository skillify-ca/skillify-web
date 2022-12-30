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
        }
    ];


   // Mocking Math.random to always return 0.5
const mockMath = Object.create(global.Math);
mockMath.random = jest.fn(() => 0.5);
global.Math = mockMath;

    const addedStudentRating:SkillRatingsRow[] = [{
        "userSkillId": 0.5,
        "skillId": "9657d0b2-696d-4575-9f0a-b2f2c5394306",
        "skillName": "I can use <h1> tags to display text",
        "unitName": "HTML",
        "studentRating": 0}]
    //Act
    const result = transformSkillsAndRatings(skillRatings);
    //Assert
    expect(result).toStrictEqual(addedStudentRating);
  });

  