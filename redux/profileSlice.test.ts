
import { UserProfileData } from "../graphql/fetchUserProfile";
import { setUserProfile } from "./profileSlice";
import reducer, { GoalSection, setGoalsSections, setUserGoals, UserGoalsState } from "./userGoalsSlice";

const userProfileDataInitialState: UserProfileData = 
{
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
  const userProfileDataNextState:UserProfileData = reducer(
    userProfileDataInitialState,
    setUserProfile(userProfileDataTestState)
  );
  console.log("UP" + userProfileDataInitialState)

  console.log("UT" + userProfileDataTestState)

  console.log("UN" + userProfileDataNextState)
  // Assert
 expect(userProfileDataNextState["userProfile"]).toEqual({
    typeName: "type",
    createdAt: new Date(2022, 10, 22),
    email: "fun@fun.com",
    lastSeen: new Date(2022, 10, 23),
    name: "John Doe",
    profileImage: "image.png",
  });

});

const userBadgeCountInitialState: number = 
0;

const userBadgeCountTestState: number = 4;


  test("should return the initial state", () => {
    expect(reducer(userBadgeCountInitialState, { type: "no action" })).toEqual(
      userBadgeCountInitialState
    );
  });


test("set userProfileData to userProfileTestState from initialState", () => {
  // Arrange

  // Act
  const userBadgeCountNextState = reducer(
    userBadgeCountInitialState,
    setUserProfile(userBadgeCountTestState)
  );
  console.log("UP" + userBadgeCountInitialState)

  console.log("UT" + userBadgeCountTestState)

  console.log("UN" + userBadgeCountNextState)
  // Assert
 expect(userBadgeCountNextState["userProfile"]).toEqual(4);

});


