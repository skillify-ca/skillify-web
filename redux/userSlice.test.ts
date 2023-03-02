import { Users } from "../graphql/studentPortal/admin/fetchUserProfileCard";
import reducer from "./userSlice";
import { userState, setUserList } from "./userSlice";

const initialState: userState[] = [
  {
    id: "",
    name: "",
    link: "",
    profile_image: "",
    badges_earned: 0,
    created_at: "",
  },
];

const testState: Users[] = [
  {
    id: "fakeid",
    name: "Lucky",
    link: "Lucky",
    profile_image: "",
    badges_earned: 22,
    created_at: "1970-01-01T00:00:00.000Z",
  },
];

test("should return the initial state", () => {
  expect(reducer(initialState, { type: "no action" })).toEqual(initialState);
});

test("set userList from initial to teststate", () => {
  // Arrange

  // Act
  const nextState = reducer(initialState, setUserList(testState));

  // Assert
  expect(nextState["userList"][0]).toEqual({
    id: "fakeid",
    name: "Lucky",
    link: "Lucky",
    profile_image: "",
    badges_earned: 22,
    created_at: "1970-01-01T00:00:00.000Z",
  });
});
