// src/features/auth/authSlice.ts
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import { RootState } from './rootReducer'
import { AppThunk } from './store'


export interface DiagnosticState {
    title: string;
}

export const initialState: DiagnosticState = {
    title: "WHOA"
}

export const diagnosticSlice: Slice = createSlice({
    name: 'diagnostic',
    initialState,
    reducers: {
        setDiagnostic: state => {
            state.title = "1"
        }
    },
})

export const { setDiagnostic } = diagnosticSlice.actions

export const diagnosticSelector = (state: RootState) => state.diagnostic