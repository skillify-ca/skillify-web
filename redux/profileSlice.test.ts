
import { UserProfileData } from "../graphql/fetchUserProfile";
import { setUserProfile } from "./profileSlice";
import reducer, { GoalSection, setGoalsSections, setUserGoals, UserGoalsState } from "./userGoalsSlice";

const userProfileDataInitialState: UserProfileData = {
    typeName: "",
    createdAt: new Date(),
    email: "",
    lastSeen: new Date(),
    name: "",
    profileImage: "",
  };

const userProfileDataTestState: UserProfileData = 
  {
    typeName: "type",
    createdAt: new Date(2022, 10, 22),
    email: "fun@fun.com",
    lastSeen: new Date(2022, 10, 23),
    name: "John Doe",
    profileImage: "image.png",
  };


  test("should return the initial state", () => {
    expect(reducer(userProfileDataInitialState, { type: "no action" })).toEqual(
      userProfileDataInitialState
    );
  });

test("set userProfileData to userProfileTestState from initialState", () => {
  // Arrange

  // Act
  const userProfileDataNextState = reducer(
    userProfileDataInitialState,
    setUserProfile(userProfileDataTestState)
  );

  // Assert
  expect(userProfileDataNextState["userProfileData"]).toEqual({
    typeName: "type",
    createdAt: new Date(2022, 10, 22),
    email: "fun@fun.com",
    lastSeen: new Date(2022, 10, 23),
    name: "John Doe",
    profileImage: "image.png",
  });
});




