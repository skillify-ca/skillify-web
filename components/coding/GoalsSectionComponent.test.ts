import { returnGoalStyle } from "./GoalsSectionComponent";
import MockDate from "mockdate";

test("Test returnGoalStyle function - highlighted red", async () => {
  //set Mock date using MockDate package
  MockDate.set("2022-11-29");

  const goal = {
    __typename: "user_goals",
    createdAt: new Date(),
    goalName: "work with Raveen on goals",
    goalNotes: null,
    id: "a1b08c36-2c8a-49e5-b9c4-f653f826fcee",
    updatedAt: new Date("2022-11-29"),
    userId: "dummyId",
    isComplete: false,
    targetDate: new Date("2022-11-29"),
    isArchived: null,
  };

  const redHighlightStyle = "text-black bg-red-400 rounded-xl p-2";

  // Act
  const result = returnGoalStyle(goal);

  // Assert
  expect(result).toBe(redHighlightStyle);
});

test("Test returnGoalStyle function - highlighted yellow", async () => {
  //set Mock date using MockDate package
  MockDate.set("2022-11-29");

  const goal = {
    __typename: "user_goals",
    createdAt: new Date(),
    goalName: "work with Raveen on goals",
    goalNotes: null,
    id: "a1b08c36-2c8a-49e5-b9c4-f653f826fcee",
    updatedAt: new Date("2022-11-29"),
    userId: "dummyId",
    isComplete: false,
    targetDate: new Date("2022-12-1"),
    isArchived: null,
  };

  const yellowHighlightStyle = "text-black-500 bg-yellow-300 rounded-xl p-2";

  // Act
  const result = returnGoalStyle(goal);

  // Assert
  expect(result).toBe(yellowHighlightStyle);
});

test("Test returnGoalStyle function - no highlight for a further future target date", async () => {
  //set Mock date using MockDate package
  MockDate.set("2022-11-29");

  const goal = {
    __typename: "user_goals",
    createdAt: new Date(),
    goalName: "work with Raveen on goals",
    goalNotes: null,
    id: "a1b08c36-2c8a-49e5-b9c4-f653f826fcee",
    updatedAt: new Date("2022-11-29"),
    userId: "dummyId",
    isComplete: false,
    targetDate: new Date("2022-12-10"),
    isArchived: null,
  };

  const noHighlightStyle = "dark:text-white text-black-500";

  // Act
  const result = returnGoalStyle(goal);

  // Assert
  expect(result).toBe(noHighlightStyle);
});

test("Test returnGoalStyle function - no highlight for completed goals", async () => {
  //set Mock date using MockDate package
  MockDate.set("2022-11-29");
  //Arrange
  const goal = {
    __typename: "user_goals",
    createdAt: new Date(),
    goalName: "work with Raveen on goals",
    goalNotes: null,
    id: "a1b08c36-2c8a-49e5-b9c4-f653f826fcee",
    updatedAt: new Date("2022-11-29"),
    userId: "dummyId",
    isComplete: true,
    targetDate: new Date("2022-16-30"),
    isArchived: null,
  };

  //Act
  const result = returnGoalStyle(goal);
  //Assert
  expect(result).toBe(" text-black-500");
});

test("Test returnGoalStyle function - no red highlight for archived goals", async () => {
  //set Mock date using MockDate package
  MockDate.set("2022-11-29");
  //Arrange
  const goal = {
    __typename: "user_goals",
    createdAt: new Date("2022-11-29"),
    goalName: "work with Raveen on goals",
    goalNotes: null,
    id: "a1b08c36-2c8a-49e5-b9c4-f653f826fcee",
    updatedAt: new Date("2022-11-29"),
    userId: "dummyId",
    isComplete: false,
    targetDate: new Date("2022-16-30"),
    isArchived: true,
  };

  const noHighlightStyle = " text-black-500";
  //Act
  const result = returnGoalStyle(goal);
  //Assert
  expect(result).toBe(noHighlightStyle);
});
