import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";


export interface MultiplicationConnectState {}

const initialState: MultiplicationConnectState = {};

export const multiplicationConnectSlice: Slice = createSlice({
    name: "MultiplicationConnectGame",
    initialState,
    reducers:{
        
    }
});

const multiplicationConnectSelector = (state: RootState) =>
  state.multiplicationConnect;