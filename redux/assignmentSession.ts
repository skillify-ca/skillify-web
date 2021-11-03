import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export interface assignmentSessionState {
    tvInternet: string,
    phone: string,
    grocery: string,
    totalAdditional: string,
    sumAddValidation: string,
    carPayment1: string,
    carPayment2: string,
    carInsurance: string,
    gasoline: string,
    totalCarCosts: string,
    sumValidationCar: string,
    housePayment: string,
    electricBill: string,
    gasBill: string,
    waterBill: string,
    totalHousingCost: string,
    homeType: string,
    yourMonthlyIncome: string,
    spouseMonthlyIncome: string,
    totalMonthlyIncome: string,
    backgroundColour: string,
}

const initialState: assignmentSessionState = {
    tvInternet: "",
    phone: "",
    grocery: "",
    totalAdditional: "",
    sumAddValidation: "",
    carPayment1: "",
    carPayment2: "",
    carInsurance: "",
    gasoline: "",
    totalCarCosts: "",
    sumValidationCar: "",
    housePayment: "",
    electricBill: "",
    gasBill: "",
    waterBill: "",
    totalHousingCost: "",
    homeType: "",
    yourMonthlyIncome: "",
    spouseMonthlyIncome: "",
    totalMonthlyIncome: "",
    backgroundColour: ""
}

export const assignmentSessionSlice: Slice = createSlice({
    name: "assignmentSession",
    initialState,
    reducers: {
        setTvInternet: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setTvInternet") {
                const newTvInternet = action.payload as string;
                state.tvInternet = newTvInternet;
            }
        },
        setPhone: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setPhone") {
                const newPhone = action.payload as string;
                state.phone = newPhone;
            }
        },
        setGrocery: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setGrocery") {
                const newGrocery = action.payload as string;
                state.grocery = newGrocery;
            }
        },
        setTotalAdditional: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setTotalAdditional") {
                const newTotalAdditional = action.payload as string;
                state.totalAdditional = newTotalAdditional;
            }
        },
        setSumAddValidation: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setSumAddValidation") {
                const newSumAddValidation = action.payload as string;
                state.sumAddValidation = newSumAddValidation;
            }
        },
        setCarPayment1: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setCarPayment1") {
                const newCarPayment1 = action.payload as string;
                state.carPayment1 = newCarPayment1;
            }
        },
        setCarPayment2: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setCarPayment2") {
                const newCarPayment2 = action.payload as string;
                state.carPayment2 = newCarPayment2;
            }
        },
        setCarInsurance: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setCarInsurance") {
                const newCarInsurance = action.payload as string;
                state.carInsurance = newCarInsurance;
            }
        },
        setGasoline: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setGasoline") {
                const newGasoline = action.payload as string;
                state.gasoline = newGasoline;
            }
        },
        setTotalCarCosts: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setTotalCarCosts") {
                const newTotalCarCosts = action.payload as string;
                state.totalCarCosts = newTotalCarCosts;
            }
        },
        setSumValidationCar: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setSumValidationCar") {
                const newSumValidationCar = action.payload as string;
                state.sumValidationCar = newSumValidationCar;
            }
        },
        setHousePayment: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setHousePayment") {
                const newHousePayment = action.payload as string;
                state.housePayment = newHousePayment;
            }
        },
        setElectricBill: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setElectricBill") {
                const newElectricBill = action.payload as string;
                state.electricBill = newElectricBill;
            }
        },
        setGasBill: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setGasBill") {
                const newGasBill = action.payload as string;
                state.gasBill = newGasBill;
            }
        },
        setTotalHousingCost: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setTotalHousingCost") {
                const newTotalHousingCost = action.payload as string;
                state.totalHousingCost = newTotalHousingCost;
            }
        },
        setWaterBill: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setWaterBill") {
                const newWaterBill = action.payload as string;
                state.waterBill = newWaterBill;
            }
        },
        setHomeType: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setHomeType") {
                const newHomeType = action.payload as string;
                state.homeType = newHomeType;
            }
        },
        setYourMonthlyIncome: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setYourMonthlyIncome") {
                const newYourMonthlyIncome = action.payload as string;
                state.yourMonthlyIncome = newYourMonthlyIncome;
            }
        },
        setSpouseMonthlyIncome: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setSpouseMonthlyIncome") {
                const newSpouseMonthlyIncome = action.payload as string;
                state.spouseMonthlyIncome = newSpouseMonthlyIncome;
            }
        },
        setTotalMonthlyIncome: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setTotalMonthlyIncome") {
                const newTotalMonthlyIncome = action.payload as string;
                state.totalMonthlyIncome = newTotalMonthlyIncome;
            }
        },
        setBackgroundColour: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setBackgroundColour") {
                const newBackgroundColour = action.payload as string;
                state.backgroundColour = newBackgroundColour;
            }
        }
    }
})

export const { setTvInternet, setPhone, setGrocery, setTotalAdditional, setSumAddValidation, setCarPayment1, setCarPayment2, setCarInsurance, setGasoline, setTotalCarCosts, setSumValidationCar, setHousePayment, setElectricBill, setGasBill, setTotalHousingCost, setWaterBill, setHomeType, setYourMonthlyIncome, setSpouseMonthlyIncome, setTotalMonthlyIncome, setBackgroundColour } = assignmentSessionSlice.actions;

export const assignmentSessionSelector = (state: RootState) => state.assignmentSession;
