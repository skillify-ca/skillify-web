import { configureStore, Action } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ThunkAction } from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

import rootReducer, { RootState } from "./rootReducer";

// Import the necessary methods for saving and loading
import { save, load } from "redux-localstorage-simple";

/*
    Saving to LocalStorage is achieved using Redux 
    middleware. The 'save' method is called by Redux 
    each time an action is handled by your reducer.
*/
const createStoreWithMiddleware = applyMiddleware(
  save() // Saving done here
)(createStore);

/*
    Loading from LocalStorage happens during
    creation of the Redux store.
*/
const store = createStoreWithMiddleware(
  rootReducer,
  load() // Loading done here
);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export default store;
