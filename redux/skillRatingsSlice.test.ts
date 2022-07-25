import reducer, {
  SkillRatingsState,
  setSkillRatings,
  SkillRatingsRow,
} from "./skillRatingsSlice";

const initialState: SkillRatingsState[] = [
  {
    skillRatings: [],
  },
];

test("should return the initial state", () => {
  expect(reducer(initialState, { type: "no action" })).toEqual(initialState);
});

test("set skillRatings to testState from initial ", () => {
  // Arrange
  const testState: SkillRatingsRow[] = [
    {
      skillId: "abc123",
      skillName: "Able to use <p> tags",
      unitName: "HTML",
      studentRating: 98,
    },
  ];

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
