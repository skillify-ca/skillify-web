import reducer, {
  SkillRatingsState,
  setSkillRatings,
  SkillRatingsRow,
  updateSkillRatings,
} from "./skillRatingsSlice";

const initialState: SkillRatingsState[] = [
  {
    skillRatings: [],
  },
];

const testState: SkillRatingsRow[] = [
  {
    skillId: "abc123",
    skillName: "Able to use <p> tags",
    unitName: "HTML",
    studentRating: 98,
  },
];

test("should return the initial state", () => {
  expect(reducer(initialState, { type: "no action" })).toEqual(initialState);
});

test("set skillRatings to testState from initial ", () => {
  // Arrange

  // Act
  const nextState = reducer(initialState, setSkillRatings(testState));

  // Assert
  expect(nextState["skillRatings"][0]).toEqual({
    skillId: "abc123",
    skillName: "Able to use <p> tags",
    unitName: "HTML",
    studentRating: 98,
  });
});

test("update studentRating value from testState to 1", () => {
  // Act

  // mimic first loading state by setting skillRatings to testState
  const firstLoadState = reducer(initialState, setSkillRatings(testState));

  // change value of newStudentRating from 98 to 1 for skillId "abc 123"

  const nextState = reducer(
    firstLoadState,
    updateSkillRatings({ newStudentRating: 1, skillId: "abc123" })
  );

  // Assert
  expect(nextState["skillRatings"][0]).toEqual({
    skillId: "abc123",
    skillName: "Able to use <p> tags",
    unitName: "HTML",
    studentRating: 1,
  });
});
