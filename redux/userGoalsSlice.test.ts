
import { UserGoalsData } from "../graphql/fetchUserGoals";
import reducer, { GoalSection, setGoalsSections, setUserGoals, UserGoalsState } from "./userGoalsSlice";

const userGoalsInitialState: UserGoalsData[] = [];

const userGoalsTestState: UserGoalsData[] = [
  {
    createdAt: new Date(2022, 12, 14),
    goalName: "Write Functions",
    goalNotes: "recurring goal",
    id: "12345",
    updatedAt: new Date(2022, 12, 10),
    userId: "BR9u18SJzvVNzcrkEIcJDPxv1ws1",
    isComplete: true,
    targetDate: new Date(2022, 12, 14),
    isArchived: false,
  },
];

test("should return the initial state", () => {
  expect(reducer(userGoalsInitialState, { type: "no action" })).toEqual(
    userGoalsInitialState
  );
});

test("set userGoals to userGoalsTestState from initialState", () => {
  // Arrange

  // Act
  const userGoalsNextState = reducer(
    userGoalsInitialState,
    setUserGoals(userGoalsTestState)
  );

  // Assert
  expect(userGoalsNextState["userGoals"][0]).toEqual({
    createdAt: new Date(2022, 12, 14),
    goalName: "Write Functions",
    goalNotes: "recurring goal",
    id: "12345",
    updatedAt: new Date(2022, 12, 10),
    userId: "BR9u18SJzvVNzcrkEIcJDPxv1ws1",
    isComplete: true,
    targetDate: new Date(2022, 12, 14),
    isArchived: false,
  });
});




const goalsSectionsInitialState: GoalSection[] = [
    { sectionName: "",
      userGoals: [],
    },
  ];
  
  const goalsSectionsTestState: GoalSection[] = [
  {
        sectionName: "Archived",
        userGoals: [
                {
                createdAt: new Date(2022, 12, 14),
                goalName: "Write Functions",
                goalNotes: "recurring goal",
                id: "12345",
                updatedAt: new Date(2022, 12, 10),
                userId: "BR9u18SJzvVNzcrkEIcJDPxv1ws1",
                isComplete: true,
                targetDate: new Date(2022, 12, 14),
                isArchived: false,
                },
              ],
            }

  ];
  
  test("should return the initial state", () => {
    expect(reducer(goalsSectionsInitialState, { type: "no action" })).toEqual(goalsSectionsInitialState);
  });
  
  test("set goalsSections to goalsSectionsState from initialState", () => {
    // Arrange
  
    // Act
    const goalsSectionsNextState = reducer(
      goalsSectionsInitialState,
      setGoalsSections(goalsSectionsTestState)
    );
  
    // Assert
    expect(goalsSectionsNextState["goalsSections"][0]).toEqual({
        sectionName: "Archived",
        userGoals: [
                {
                createdAt: new Date(2022, 12, 14),
                goalName: "Write Functions",
                goalNotes: "recurring goal",
                id: "12345",
                updatedAt: new Date(2022, 12, 10),
                userId: "BR9u18SJzvVNzcrkEIcJDPxv1ws1",
                isComplete: true,
                targetDate: new Date(2022, 12, 14),
                isArchived: false,
                },
              ],
            });
  });
