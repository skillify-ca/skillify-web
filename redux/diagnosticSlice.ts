import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import { Question } from '../pages/api/question'
import { Topic } from '../pages/api/skill'
import { RootState } from './rootReducer'

export interface DiagnosticState {
    questions: Array<Question>;
    guessAns: Array<string>;
    topics: Array<Topic>
}

const initialState: DiagnosticState = {
    questions: [],
    guessAns: [],
    topics: []
}

export const diagnosticSlice: Slice = createSlice({
    name: 'diagnostic',
    initialState,
    reducers: {
        setDiagnostic: (state, action: PayloadAction<DiagnosticState>) => {
            if (action.type == "diagnostic/setDiagnostic") {
                const newDiagnosticState = action.payload as DiagnosticState
                state.questions = newDiagnosticState.questions
                state.guessAns = newDiagnosticState.guessAns
                state.topics = newDiagnosticState.topics
            }
        }
    },
})

export const { setDiagnostic } = diagnosticSlice.actions

export const diagnosticSelector = (state: RootState) => state.diagnostic