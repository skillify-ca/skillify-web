import { returnGoalStyle } from "./GoalsSectionComponent";

test("Test returnGoalStyle function - highlighted red", async () => {
    //Arrange
    const goal =
        {"__typename":"user_goals",
        "createdAt": new Date(2022-11-29),
        "goalName":"work with Raveen on goals",
        "goalNotes":null,
        "id":"a1b08c36-2c8a-49e5-b9c4-f653f826fcee",
        "updatedAt": new Date(2022-11-29),
        "userId":"dummyId",
        "isComplete":false,
        "targetDate": new Date(2022-17-30),
        "isArchived":null};

    const redHighlightStyle = "text-black bg-red-400 rounded-xl p-2"
    //Act
    const result = returnGoalStyle(goal);
    //Assert
    expect(result).toBe(redHighlightStyle);
  });

  test("Test returnGoalStyle function - no highlight for completed goals", async () => {
    //Arrange
    const goal =
        {"__typename":"user_goals",
        "createdAt": new Date(2022-11-29),
        "goalName":"work with Raveen on goals",
        "goalNotes":null,
        "id":"a1b08c36-2c8a-49e5-b9c4-f653f826fcee",
        "updatedAt": new Date(2022-11-29),
        "userId":"dummyId",
        "isComplete":true,
        "targetDate": new Date(2022-16-30),
        "isArchived":null};

  
    //Act
    const result = returnGoalStyle(goal);
    //Assert
    expect(result).toBe(" text-black-500");
  });

  test("Test returnGoalStyle function - no red highlight for archived goals", async () => {
    //Arrange
    const goal =
        {"__typename":"user_goals",
        "createdAt": new Date(2022-11-29),
        "goalName":"work with Raveen on goals",
        "goalNotes":null,
        "id":"a1b08c36-2c8a-49e5-b9c4-f653f826fcee",
        "updatedAt": new Date(2022-11-29),
        "userId":"dummyId",
        "isComplete":false,
        "targetDate": new Date(2022-16-30),
        "isArchived":true};

    const noHighlightStyle = " text-black-500"
    //Act
    const result = returnGoalStyle(goal);
    //Assert
    expect(result).toBe(noHighlightStyle);
  });