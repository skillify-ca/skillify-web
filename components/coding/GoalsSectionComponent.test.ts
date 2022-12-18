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
        "userId":"BR9u18SJzvVNzcrkEIcJDPxv1ws1",
        "isComplete":false,
        "targetDate": new Date(2022-17-30),
        "isArchived":null};

  
    //Act
    const result = returnGoalStyle(goal);
    //Assert
    expect(result).toBe("text-black bg-red-400 rounded-xl p-2");
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
        "userId":"BR9u18SJzvVNzcrkEIcJDPxv1ws1",
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
        "userId":"BR9u18SJzvVNzcrkEIcJDPxv1ws1",
        "isComplete":false,
        "targetDate": new Date(2022-16-30),
        "isArchived":true};

  
    //Act
    const result = returnGoalStyle(goal);
    //Assert
    expect(result).toBe(" text-black-500");
  });