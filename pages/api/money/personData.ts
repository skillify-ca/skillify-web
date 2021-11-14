import { ItemCostModel } from "./itemCostModel";

export type PersonData = {
    name: string,
    month: string,
    income: Array<ItemCostModel>,
    expenses:Array<ItemCostModel>,
    totalIncome: number,
    totalExpenses: number,
  };

  