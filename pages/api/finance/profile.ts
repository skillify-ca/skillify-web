import { EnumTypeDefinitionNode, SingleFieldSubscriptionsRule } from "graphql";

export interface FinanceProfileType {
 
  key:string;
  maritalStatus: MaritalStatus;
  individualSalary: number;
  individualOccupation: string;
  spouseSalary: number;
  spouseOccupation: string;
  numberOfChildren: boolean;


}

export enum MaritalStatus {
  SINGLE,
  MARRIED,
}

export const financialProfileData:FinanceProfileType[] = [

    {
      key: "profile1",
      individualOccupation: "Construction Worker",
      individualSalary: 2578,
      maritalStatus: MaritalStatus.MARRIED,
      numberOfChildren: false,
      spouseOccupation: "Car Salesperson",
      spouseSalary: 2062,
    },
    
    {
      key: "profile2",
      individualOccupation: "Landscaper",
      individualSalary: 2398,
      maritalStatus: MaritalStatus.MARRIED,
      numberOfChildren: true,
      spouseOccupation: "Photographer",
      spouseSalary: 2243,
    },
    
    {
      key: "profile3",
      individualOccupation: "Chef",
      individualSalary: 2652,
      maritalStatus: MaritalStatus.SINGLE,
      numberOfChildren: true,
      spouseOccupation:"",
      spouseSalary: 0,
    },
    
    {
      key: "profile4",
      individualOccupation: "Teacher",
      individualSalary: 2462,
      maritalStatus: MaritalStatus.MARRIED,
      numberOfChildren: true,
      spouseOccupation: "Funeral Director",
      spouseSalary: 2683,
    },
    
    {
      key: "profile5",
      individualOccupation: "Phone Salesman",
      individualSalary: 1825,
      maritalStatus: MaritalStatus.MARRIED,
      numberOfChildren: true,
      spouseOccupation: "Librarian",
      spouseSalary: 2373,
    },
    
    
    {
      key: "profile6",
      individualOccupation: "Veterinarian",
      individualSalary: 3312,
      maritalStatus: MaritalStatus.MARRIED,
      numberOfChildren: false,
      spouseOccupation: "Architect",
      spouseSalary: 4416,
    },
    
    
    {
      key: "profile7",
      individualOccupation: "Truck Driver",
      individualSalary: 2462,
      maritalStatus: MaritalStatus.MARRIED,
      numberOfChildren: true,
      spouseOccupation: "Mechanical Engineer",
      spouseSalary: 3208,
    },
    
    {
      key: "profile8",
      individualOccupation: "Baker",
      individualSalary: 2049,
      maritalStatus: MaritalStatus.MARRIED,
      numberOfChildren: true,
      spouseOccupation: "Religious Leader",
      spouseSalary: 2586,
    },
    
    {
      key: "profile9",
      individualOccupation: "Pharmacist",
      individualSalary: 3781,
      maritalStatus: MaritalStatus.SINGLE,
      numberOfChildren: false,
      spouseOccupation: "",
      spouseSalary: 0,
    },
    
    
    {
      key: "profile10",
      individualOccupation: "Actor",
      individualSalary: 2078,
      maritalStatus: MaritalStatus.MARRIED,
      numberOfChildren: true,
      spouseOccupation: "Project Manager",
      spouseSalary: 2243,
    },
    
    
    {
      key: "profile11",
      individualOccupation: "Mechanic",
      individualSalary: 2665,
      maritalStatus: MaritalStatus.SINGLE,
      numberOfChildren: true,
      spouseOccupation: "",
      spouseSalary: 0,
    },
    
    
    {
      key: "profile12",
      individualOccupation: "Radio Disc Jockey",
      individualSalary: 2247,
      maritalStatus: MaritalStatus.MARRIED,
      numberOfChildren: false,
      spouseOccupation: "Nurse",
      spouseSalary: 2830,
    },
    
    
    
    ];
    