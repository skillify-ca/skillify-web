import { combineReducers, Reducer } from '@reduxjs/toolkit'
import { diagnosticSlice } from "./diagnosticSlice"

type State = {
    diagnostic: string;
}
const diagnosticReducer: Reducer = diagnosticSlice.reducer
const rootReducer = combineReducers({ diagnostic: diagnosticReducer })

export type RootState = State

export default rootReducer