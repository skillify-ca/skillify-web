import { ReactNode, useState } from "react";

export interface HouseExpensesProps {
    housePayment: string;
    setHousePayment: (housePayment: string) => void;
    electricBill: string;
    setElectricBill: (electricBill: string) => void;
    gasBill: string;
    setGasBill: (setGasBill: string) => void;
    waterBill: string;
    setWaterBill: (waterBill: string) => void;
    totalHousingCost: string;
    setTotalHousingCost: (totalHousingCost: string) => void;

}

const HouseExpensesTable = ({

    housePayment,
    setHousePayment,
    electricBill,
    setElectricBill,
    gasBill,
    setGasBill,
    waterBill,
    setWaterBill,
    totalHousingCost,
    setTotalHousingCost

}: HouseExpensesProps) => {

    const [bgColour, setBgColour] = useState("bg-green-100")

    return (
        <div>
           <div>
               <p className="pb-3 font-bold">Section 3: Housing Expenses</p> 
               <p className="pb-1">Which home do you choose for your family? <input type="text" placeholder="Enter Text" className="bg-blue-100 rounded-sm w-36 pl-1"/></p>
               <p className="pb-3">How many bedrooms? <input type="number" className="bg-blue-100 rounded-sm w-10 text-center"/> How many baths? <input type="number" className="bg-blue-100 rounded-sm w-10 text-center"/></p>
               <p className="pb-3">Add up your expenses in this section and put the total in Box H.</p>
           </div>

           <div className="pb-1">
               <table className="shadow-md">
               <thead>
                   <tr>
                       <th className="border border-black w-60 bg-green-300">Expense</th>
                       <th className="border border-black w-60 bg-green-300">Cost Per Month</th>
                   </tr>
               </thead>

               <tbody>
                   <tr>
                       <td className="border border-black pl-1">House Payment</td>
                       <td className="border border-black pl-1">D. 
                       <input 
                        value = {housePayment}
                        onChange= {(e) => setHousePayment(e.target.value)}
                        placeholder= "Enter amount"
                        /></td>
                   </tr>
                   <tr>
                       <td className="border border-black pl-1">Electric Bill</td>
                       <td className="border border-black pl-1">E. 
                       <input
                       value = {electricBill}
                       onChange = {(e) => setElectricBill(e.target.value)} 
                       placeholder = "Enter amount"/></td>
                   </tr>
                   <tr>
                       <td className="border border-black pl-1">Gas Bill</td>
                       <td className="border border-black pl-1">F. 
                       <input 
                       value = {gasBill} 
                       onChange = {(e) => setGasBill(e.target.value)}
                       placeholder = "Enter amount"/></td>
                   </tr>
                   <tr>
                       <td className="border border-black pl-1">Water Bill</td>
                       <td className="border border-black pl-1">G. 
                       <input
                       value = {waterBill}
                       onChange = {(e) => setWaterBill(e.target.value)}
                       placeholder = "Enter amount"/></td>
                   </tr>
                   <tr>
                       <td className="border border-black font-bold pl-1 bg-green-300">Total Housing Costs</td>
                       <td className="border border-black pl-1">H. 
                       <input

                       className= {bgColour}
                       value = {totalHousingCost}
                       onChange = {(e) => {
                        setTotalHousingCost(e.target.value)
                       }
                        }
                       placeholder = "Enter amount"/></td>
                   </tr>
               </tbody>
               </table>
               <p>gas bill = {gasBill}</p>
           </div>
           <p className="text-xs ml-72 pl-4">**Put this amount in section 6**</p>
        </div>   
    )
}

export default HouseExpensesTable;