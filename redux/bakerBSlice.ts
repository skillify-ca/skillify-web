import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";


export interface BakersRackBState{
    piePlusBread:string;
    piePlusBreadNum:any;
    piePlusBreadDen:any;
    cupPlusCook: string;
    cupPlusCookNum:any;
    cupPlusCookDen:any;
    browPlusCake:string;
    browPlusCakeNum:any;
    browPlusCakeDen:any;
    piePlusCook: string;
    piePlusCookNum: any;
    piePlusCookDen: any;
    cookMinCake:string;
    cookMinCakeNum:any;
    cookMinCakeDen:any;
    browMinBread:string;
    browMinBreadNum:any;
    browMinBreadDen:any;
    cupMinPie: string;
    cupMinPieNum:any;
    cupMinPieDen:any;
    breadMinCake:string;
    breadMinCakeNum:any;
    breadMinCakeDen:any;
}

export const isPieBreadValid = (state: BakersRackBState) => {
    if(state.piePlusBreadNum / state.piePlusBreadDen === 3/21){
        return true;
    } else { 
    return false;}
}

export const isCupCookValid = (state: BakersRackBState) => {
    if(state.cupPlusCookNum / state.cupPlusCookDen === 33/63){
        return true;
    } else { 
    return false;}
}

export const isBrowCakeValid = (state: BakersRackBState) => {
    if(state.browPlusCakeNum / state.browPlusCakeDen === 7/21){
        return true;
    } else { 
    return false;}
}

export const isPieCookValid = (state: BakersRackBState) => {
    if(state.piePlusCookNum / state.piePlusCookDen === 9/21){
        return true;
    } else { 
    return false;}
}

export const isCookCakeValid = (state: BakersRackBState) => {
    if(state.cookMinCakeNum / state.cookMinCakeDen === 6/21){
        return true;
    } else { 
    return false;}
}

export const isBrowBreadValid = (state: BakersRackBState) => {
    if(state.browMinBreadNum / state.browMinBreadDen === 5/21){
        return true;
    } else { 
    return false;}
}

export const isCupPieValid = (state: BakersRackBState) => {
    if(state.cupMinPieNum / state.cupMinPieDen === 6/63){
        return true;
    } else { 
    return false;}
}

export const isBreadCakeValid = (state: BakersRackBState) => {
    if(state.breadMinCakeNum / state.breadMinCakeDen === 0/1){
        return true;
    } else { 
    return false;}
}

const initialState: BakersRackBState={
    piePlusBread: "",
    piePlusBreadNum: "",
    piePlusBreadDen:"",
    cupPlusCook: "",
    cupPlusCookNum: "",
    cupPlusCookDen:"",
    browPlusCake:"",
    browPlusCakeNum:"",
    browPlusCakeDen:"",
    piePlusCook: "",
    piePlusCookNum: "",
    piePlusCookDen: "",
    cookMinCake: "",
    cookMinCakeNum:"",
    cookMinCakeDen:"",
    browMinBread:"",
    browMinBreadNum:"",
    browMinBreadDen:"",
    cupMinPie: "",
    cupMinPieNum: "",
    cupMinPieDen: "",
    breadMinCake:"",
    breadMinCakeNum:"",
    breadMinCakeDen:"",
    


};

export const bakersRackBSlice: Slice = createSlice({
    name:"bakersRackB",
    initialState,
    reducers:{
        setPiePlusBread:(state: BakersRackBState,action: PayloadAction<string>) =>{
           if(action.type == "bakersRackB/setPiePlusBread"){
               const newPiePlusBread = action.payload as string; 
               state.piePlusBread = newPiePlusBread;
           }
        },
        setPiePlusBreadNum:(state: BakersRackBState,action:PayloadAction<Array<any>>) =>{
            if(action.type == "bakersRackB/setPiePlusBreadNum"){
                const newPiePlusBreadNum = action.payload as any;
                state.piePlusBreadNum = newPiePlusBreadNum;
            }
        },
        setPiePlusBreadDen:(state: BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type== "bakersRackB/setPiePlusBreadDen"){
                const newPiePlusBreadDen = action.payload as any;
                state.piePlusBreadDen  = newPiePlusBreadDen;
            }
        },
        setCupPlusCook:(state: BakersRackBState,action:PayloadAction<string>)=>{
            if(action.type=="bakersRackB/setCupPlusCook"){
                const newCupPlusCook = action.payload as string;
                state.cupPlusCook = newCupPlusCook;
            }
        },
        setCupPlusCookNum:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type=="bakersRackB/setCupPlusCookNum"){
                const newCupPlusCookNum = action.payload as any;
                state.cupPlusCookNum = newCupPlusCookNum;
            }
        },
        setCupPlusCookDen:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type=="bakersRackB/setCupPlusCookDen"){
                const newCupPlusCookDen = action.payload as any;
                state.cupPlusCookDen = newCupPlusCookDen;
            }
        },
        setBrowPlusCake:(state:BakersRackBState,action:PayloadAction<string>)=>{
            if(action.type=="bakersRackB/setBrowPlusCake"){
                const newBrowPlusCake = action.payload as string;
                state.browPlusCake = newBrowPlusCake;
            }
            
        },
        setBrowPlusCakeNum:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type=="bakersRackB/setBrowPlusCakeNum"){
                const newBrowPlusCakeNum = action.payload as any;
                state.browPlusCakeNum = newBrowPlusCakeNum;
            }
        },
        setBrowPlusCakeDen:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type == "bakersRackB/setBrowPlusCakeDen"){
                const newBrowPlusCakeDen = action.payload as any;
                state.browPlusCakeDen = newBrowPlusCakeDen;
            }
        },
        setPiePlusCook:(state:BakersRackBState,action:PayloadAction<string>)=>{
            if(action.type == "bakersRackB/setPiePlusCook"){
                const newPiePlusCook = action.payload as string;
                state.piePlusCook = newPiePlusCook;
            }
        },
        setPiePlusCookNum:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type == "bakersRackB/setPiePlusCookNum"){
                const newPiePlusCookNum = action.payload as any;
                state.piePlusCookNum = newPiePlusCookNum;
            }
        },
        setPiePlusCookDen:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type == "bakersRackB/setPiePlusCookDen") {
                const newPiePlusCookDen = action.payload as any;
                state.piePlusCookDen = newPiePlusCookDen;
            }
        },
        setCookMinCake:(state:BakersRackBState,action:PayloadAction<string>)=>{
            if(action.type == "bakersRackB/setCookMinCake"){
                const newCookMinCake = action.payload as string;
                state.cookMinCake = newCookMinCake;
            }
        },
        setCookMinCakeNum:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type == "bakersRackB/setCookMinCakeNum") {
                const newCookMinCakeNum = action.payload as any;
                state.cookMinCakeNum= newCookMinCakeNum;
            }
        },
        setCookMinCakeDen:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type == "bakersRackB/setCookMinCakeDen") {
                const newCookMinCakeDen = action.payload as any;
                state.cookMinCakeDen= newCookMinCakeDen;
            }
        },
        setBrowMinBread:(state:BakersRackBState,action:PayloadAction<string>)=>{
            if(action.type == "bakersRackB/setBrowMinBread"){
                const newBrowMinBread = action.payload as string;
                state.browMinBread = newBrowMinBread
            }
        },
        setBrowMinBreadNum:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type=="bakersRackB/setBrowMinBreadNum"){
                const newBrowMinBreadNum = action.payload as any;
                state.browMinBreadNum = newBrowMinBreadNum;
            }
        },
        setBrowMinBreadDen:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type == "bakersRackB/setBrowMinBreadDen"){
                const newBrowMinBreadDen = action.payload as any;
                state.browMinBreadDen = newBrowMinBreadDen;
            }
        },
        setCupMinPie:(state:BakersRackBState,action:PayloadAction<string>)=>{
            if(action.type == "bakersRackB/setCupMinPie"){
                const newCupMinPie = action.payload as any;
                state.cupMinPie = newCupMinPie;
            }
        },
        setCupMinPieNum:(state:BakersRackBState,action:PayloadAction<Array<any>>) =>{
            if(action.type =="bakersRackB/setCupMinPieNum"){
                const newCupMinPieNum = action.payload as any;
                state.cupMinPieNum = newCupMinPieNum;
            }
        },
        setCupMinPieDen:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type =="bakersRackB/setCupMinPieDen"){
                const newCupMinPieDen = action.payload as any;
                state.cupMinPieDen = newCupMinPieDen;
            }
        },
        setBreadMinCake:(state:BakersRackBState,action:PayloadAction<string>)=>{
            if(action.type == "bakersRackB/setBreadMinCake"){
                const newBreadMinCake = action.payload as string;
                state.breadMinCake = newBreadMinCake; 
            }
        },
        setBreadMinCakeNum:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type == "bakersRackB/setBreadMinCakeNum"){
                const newBreadMinCakeNum = action.payload as any;
                state.breadMinCakeNum = newBreadMinCakeNum;
            }
        },
        setBreadMinCakeDen:(state:BakersRackBState,action:PayloadAction<Array<any>>)=>{
            if(action.type=="bakersRackB/setBreadMinCakeDen"){
                const newBreadMinCakeDen = action.payload as any;
                state.breadMinCakeDen = newBreadMinCakeDen;
            }
        },
        

    }
})

export const {setPiePlusBread,setPiePlusBreadNum,setPiePlusBreadDen,setCupPlusCook,setCupPlusCookNum,setCupPlusCookDen,setBrowPlusCake,setBrowPlusCakeNum,setBrowPlusCakeDen,setPiePlusCook,setPiePlusCookNum,setPiePlusCookDen,setCookMinCake,setCookMinCakeNum,setCookMinCakeDen,setBrowMinBread,setBrowMinBreadNum,setBrowMinBreadDen,setCupMinPie,setCupMinPieNum,setCupMinPieDen,setBreadMinCake,setBreadMinCakeNum,setBreadMinCakeDen} = bakersRackBSlice.actions;

export const bakersRackBSelector = (state:RootState) => state.bakersRackB;

