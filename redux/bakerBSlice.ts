import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { BakersRackB } from "../components/bakery/BakersRackB";
import { RootState } from "./rootReducer";

export interface BakersRackBState{
    piePlusBread:string;
    piePlusBreadNum:any;
    piePlusBreadDen:any;
    /*cupPlusCook: string;
    cupPlusCookNum:any;
    cupPlusCookDen:any;
    browPlusCake:string;
    browPlusCakeNum:any;
    browPlusCakeDen:any;
    piePlusCook: string;
    piePlusCookNum: any;
    piePlusCookDen: any;
    cookMinCake:String;
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
    breadMinCakeDen:any;*/


}

/*const isPieBreadValid = (state: BakersRackBState) => {
    state.piePlusBreadDen / state.piePlusBreadNum === 3/21
}*/

const initialState: BakersRackBState={
    piePlusBread: "",
    piePlusBreadNum: "",
    piePlusBreadDen:"",
    /*cupPlusCook: "",
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
    breadMinCakeDen:"",*/


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
        }
    }
})

export const {setPiePlusBread} = bakersRackBSlice.actions;
export const {setPiePlusBreadNum} = bakersRackBSlice.actions;
export const {setPiePlusBreadDen} = bakersRackBSlice.actions;


export const bakersRackBSelector = (state:RootState) => state.bakersBRack;
 