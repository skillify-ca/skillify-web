import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { UserAssignmentSubmissionsData } from "../graphql/fetchUserAssignmentSubmissions";
import { RootState } from "./rootReducer";

export type AssignmentsState = {
  userAssignments: UserAssignmentSubmissionsData[];
};



const initialState: AssignmentsState = {
  userAssignments: {} as UserAssignmentSubmissionsData[],
};

export const assignmentsSlice: Slice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setUserAssignments: (
      state: AssignmentsState,
      action: PayloadAction<UserAssignmentSubmissionsData[]>
    ) => {
      if (action.type == "assignments/setUserAssignments") {
        return {
          userAssignments: [...action.payload],
        };
      }
    },
  },
});

export const { setUserAssignments} =
  assignmentsSlice.actions;

export default assignmentsSlice.reducer;

export const assignmentsSelector = (state: RootState) =>
  state.assignmentsState;