import { combineReducers, Reducer } from '@reduxjs/toolkit'
import { diagnosticSlice, DiagnosticState } from "./diagnosticSlice"

type State = {
    diagnostic: DiagnosticState;
}
const diagnosticReducer: Reducer = diagnosticSlice.reducer
const rootReducer = combineReducers({ diagnostic: diagnosticReducer })

export type RootState = State

export default rootReducer