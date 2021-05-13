import { createStore } from "redux";
import rootReducer from "./reducers";

export default createStore(
  rootReducer,
  typeof window !== "undefined" && // we have a browser
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
