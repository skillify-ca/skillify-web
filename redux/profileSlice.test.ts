
import { UserProfileData } from "../graphql/fetchUserProfile";
import reducer, { setTotalBadgeCount, setUserBadgeCount, setUserProfile } from "./profileSlice";

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

const userBadgeCountInitialState: number = 
0;

const userBadgeCountTestState: number = 4;


  test("should return the initial state", () => {
    expect(reducer(userBadgeCountInitialState, { type: "no action" })).toEqual(
      userBadgeCountInitialState
    );
  });


test("set userBadgeCount to userBadgeCountTestState from initialState", () => {
  // Arrange

  // Act
  const userBadgeCountNextState = reducer(
    userBadgeCountInitialState,
    setUserBadgeCount(userBadgeCountTestState)
  );
  
  // Assert
 expect(userBadgeCountNextState["userBadgeCount"]).toEqual(4);

});

const totalBadgeCountInitialState: number = 
0;

const totalBadgeCountTestState: number = 30;


  test("should return the initial state", () => {
    expect(reducer(totalBadgeCountInitialState, { type: "no action" })).toEqual(
      totalBadgeCountInitialState
    );
  });


test("set totalBadgeCount to totalBadgeCountTestState from initialState", () => {
  // Arrange

  // Act
  const totalBadgeCountNextState = reducer(
    totalBadgeCountInitialState,
    setTotalBadgeCount(totalBadgeCountTestState)
  );
  
  // Assert
 expect(totalBadgeCountNextState["totalBadgeCount"]).toEqual(30);

});
