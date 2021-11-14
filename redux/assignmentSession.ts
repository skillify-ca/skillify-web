import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { FinanceProfileType, financialProfileData, MaritalStatus } from "../pages/api/finance/profile";
import { getRndInteger } from "../pages/api/random";
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

    totalHousingCost6: string,
    totalCarCosts6: string,
    totalAdditional6: string,
    totalExpenses: string

    totalMonthlySection7: string,
    totalExpensesSection7: string,
    totalMoneyRemaining: string,
    monthlyIncomeValidation: string,
    totalExpenseValidation: string,
    moneyRemValidation: string,
    isSurpriseVisible: boolean;

    isMarried: MaritalStatus,
    hasChildren: boolean

    individualOccupation: string,
    individualSalary: number,
    spouseOccupation: string,
    spouseSalary: number,
    sectionOneValidation: boolean
    profileData: FinanceProfileType
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
    backgroundColour: "",

    totalHousingCost6: "",
    totalCarCosts6: "",
    totalAdditional6: "",
    totalExpenses: "",

    totalMonthlySection7: "",
    totalExpensesSection7: "",
    totalMoneyRemaining: "",
    monthlyIncomeValidation: "",
    totalExpenseValidation: "",
    moneyRemValidation: "",
    isSurpriseVisible: false,

    isMarried: MaritalStatus.SINGLE,
    hasChildren: false,

    individualOccupation: "",
    individualSalary: 0,
    spouseOccupation: "",
    spouseSalary: 0,
    sectionOneValidation: false,
    profileData: financialProfileData[0]
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
        },
        setTotalHousingCost6: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setTotalHousingCost6") {
                const newTotalHousingCost6 = action.payload as string;
                state.totalHousingCost6 = newTotalHousingCost6;
            }
        },
        setTotalCarCosts6: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setTotalCarCosts6") {
                const newTotalCarCosts6 = action.payload as string;
                state.totalCarCosts6 = newTotalCarCosts6;
            }
        },
        setTotalAdditional6: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setTotalAdditional6") {
                const newTotalAdditional6 = action.payload as string;
                state.totalAdditional6 = newTotalAdditional6;
            }
        },
        setTotalExpenses: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setTotalExpenses") {
                const newTotalExpenses = action.payload as string;
                state.totalExpenses = newTotalExpenses;
            }
        },
        setTotalMonthlySection7: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setTotalMonthlySection7") {
                const newTotalMonthlySection7 = action.payload as string;
                state.totalMonthlySection7 = newTotalMonthlySection7;
            }
        },
        setTotalExpensesSection7: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setExpensesSection7") {
                const newTotalExpensesSection7 = action.payload as string;
                state.totalExpensesSection7 = newTotalExpensesSection7;
            }
        },
        setTotalMoneyRemaining: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setTotalMoneyRemaining") {
                const newTotalMoneyRemaining = action.payload as string;
                state.totalMoneyRemaining = newTotalMoneyRemaining;
            }
        },
        setMonthlyIncomeValidation: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setMonthlyIncomeValidation") {
                const newMonthlyIncomeValidation = action.payload as string;
                state.monthlyIncomeValidation = newMonthlyIncomeValidation;
            }
        },
        setTotalExpenseValidation: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setTotalExpenseValidation") {
                const newTotalExpenseValidation = action.payload as string;
                state.totalExpenseValidation = newTotalExpenseValidation;
            }
        },
        setMoneyRemValidation: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setMoneyRemValidation") {
                const newMoneyRemValidation = action.payload as string;
                state.moneyRemValidation = newMoneyRemValidation;
            }
        },
        setIsSurpriseVisible: (state: assignmentSessionState, action: PayloadAction<boolean>) => {
            if (action.type == "assignmentSession/setIsSurpriseVisible") {
                const newIsSurpriseVisible = action.payload as boolean;
                state.isSurpriseVisible = newIsSurpriseVisible;
            }
        },
        setHasChildren: (state: assignmentSessionState, action: PayloadAction<boolean>) => {
            if (action.type == "assignmentSession/setHasChildren") {
                const newHasChildren = action.payload as boolean;
                state.hasChildren = newHasChildren;
            }
        },
        setIsMarried: (state: assignmentSessionState, action: PayloadAction<MaritalStatus>) => {
            if (action.type == "assignmentSession/setIsMarried") {
                const newIsMarried = action.payload as MaritalStatus;
                state.isMarried = newIsMarried;
            }
        },
        setIndividualOccupation: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setIndividualOccupation") {
                const newIndividualOccupation = action.payload as string;
                state.individualOccupation = newIndividualOccupation;
            }
        },
        setIndividualSalary: (state: assignmentSessionState, action: PayloadAction<number>) => {
            if (action.type == "assignmentSession/setIndividualSalary") {
                const newIndividualSalary = action.payload as number;
                state.individualSalary = newIndividualSalary;
            }
        },
        setSpouseOccupation: (state: assignmentSessionState, action: PayloadAction<string>) => {
            if (action.type == "assignmentSession/setSpouseOccupation") {
                const newSpouseOccupation = action.payload as string;
                state.spouseOccupation = newSpouseOccupation;
            }
        },
        setSpouseSalary: (state: assignmentSessionState, action: PayloadAction<number>) => {
            if (action.type == "assignmentSession/setSpouseSalary") {
                const newSpouseSalary = action.payload as number;
                state.spouseSalary = newSpouseSalary;
            }
        },
        setSectionOneValidation: (state: assignmentSessionState, action: PayloadAction<boolean>) => {
            if (action.type == "assignmentSession/setSectionOneValidation") {
                const newSectionOneValidation = action.payload as boolean;
                state.sectionOneValidation = newSectionOneValidation;
            }
        },
        setProfileData: (state: assignmentSessionState, action: PayloadAction<FinanceProfileType>) => {
            if (action.type == "assignmentSession/setProfileData") {
                const newProfileData = action.payload as FinanceProfileType;
                state.profileData = newProfileData;
            }
        },
    }
})

export const {
    setTvInternet,
    setPhone,
    setGrocery,
    setTotalAdditional,
    setSumAddValidation,
    setCarPayment1,
    setCarPayment2,
    setCarInsurance,
    setGasoline,
    setTotalCarCosts,
    setSumValidationCar,
    setHousePayment,
    setElectricBill,
    setGasBill,
    setTotalHousingCost,
    setWaterBill,
    setHomeType,
    setYourMonthlyIncome,
    setSpouseMonthlyIncome,
    setTotalMonthlyIncome,
    setBackgroundColour,
    setTotalHousingCost6,
    setTotalCarCosts6,
    setTotalAdditional6,
    setTotalExpenses,

    setTotalMonthlySection7,
    setTotalExpensesSection7,
    setTotalMoneyRemaining,
    setMonthlyIncomeValidation,
    setTotalExpenseValidation,
    setMoneyRemValidation,
    setIsSurpriseVisible,

    setIsMarried,
    setHasChildren,

    setIndividualOccupation,
    setIndividualSalary,
    setSpouseOccupation,
    setSpouseSalary,
    setSectionOneValidation,
    setProfileData
} = assignmentSessionSlice.actions;

export const assignmentSessionSelector = (state: RootState) => state.assignmentSession;
