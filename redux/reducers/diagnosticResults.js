import { SET_DIAGNOSTIC_RESULTS } from "../actionTypes";

const initialState = {
  questions: "VVV",
  guesses: "BBB",
};

const diagnosticResults = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIAGNOSTIC_RESULTS: {
      return action.payload.results;
    }
    default: {
      return state;
    }
  }
};

export default diagnosticResults;
