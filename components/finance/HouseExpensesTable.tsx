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
    homeType: string,
    setHomeType: (homeType: string) => void;

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
    setTotalHousingCost,
    homeType,
    setHomeType

}: HouseExpensesProps) => {

    const [validateTotal, setValidateTotal] = useState("")

    const validate = (newTotalHousingCost) => {
        housePayment + electricBill + gasBill + waterBill === ""
            ? setValidateTotal("")
            : Number.parseInt(housePayment) +
                Number.parseInt(electricBill) +
                Number.parseInt(gasBill) +
                Number.parseInt(waterBill) ===
                Number.parseInt(newTotalHousingCost)
                ? setValidateTotal("CORRECT")
                : setValidateTotal("WRONG");
    }

    return (
        <div>
            <div>
                <p className="pb-3 font-bold">Section 3: Housing Expenses</p>
                <p className="pb-1">Which home do you choose for your family? <select name="home type" id="home type"
                    className="bg-blue-100 rounded-md w-36"
                    value={homeType} onChange={(e) => setHomeType(e.target.value)}>
                    <option disabled selected>Home Type</option>
                    <option value="farm house">Farm House</option>
                    <option value="House in the Suburbs">Suburb House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="City Loft">City Loft</option>
                </select>
                </p>
                <p className="pb-3">How many bedrooms? <input type="number"
                    className="bg-blue-100 rounded-sm w-10 text-center" />
                    How many baths? <input type="number"
                        className="bg-blue-100 rounded-sm w-10 text-center" />
                </p>
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
                            <td className="border border-black pl-1 bg-white">House Payment</td>
                            <td className="border border-black pl-1 bg-white flex flex-nowrap">D.
                                <div className="ml-2">
                                    <input
                                        value={housePayment}
                                        onChange={(e) => setHousePayment(e.target.value)}
                                        placeholder="Enter amount"
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black pl-1 bg-white">Electric Bill</td>
                            <td className="border border-black pl-1 bg-white flex flex-nowrap">E.
                                <div className="ml-2">
                                    <input
                                        value={electricBill}
                                        onChange={(e) => setElectricBill(e.target.value)}
                                        placeholder="Enter amount"
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black pl-1 bg-white">Gas Bill</td>
                            <td className="border border-black pl-1 bg-white flex flex-nowrap">F.
                                <div className="ml-2">
                                    <input
                                        value={gasBill}
                                        onChange={(e) => setGasBill(e.target.value)}
                                        placeholder="Enter amount"
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black pl-1 bg-white">Water Bill</td>
                            <td className="border border-black pl-1 bg-white flex flex-nowrap">G.
                                <div className="ml-2">
                                    <input
                                        value={waterBill}
                                        onChange={(e) => setWaterBill(e.target.value)}
                                        placeholder="Enter amount"
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black font-bold pl-1 bg-green-300">Total Housing Costs</td>
                            <td className="border border-black pl-1 bg-white flex flex-nowrap">H.
                                <div className="ml-2">
                                    <input
                                        value={totalHousingCost}
                                        onChange={(e) => {
                                            const newTotalHousingCost = e.target.value;
                                            setTotalHousingCost(newTotalHousingCost);
                                            validate(newTotalHousingCost);
                                        }
                                        }
                                        placeholder="Enter amount"
                                        id="totalHousingExpensesInput"
                                        className={
                                            validateTotal == ""
                                            ? "bg-white"
                                            : validateTotal == "CORRECT"
                                            ? "bg-green-100"
                                            : validateTotal == "WRONG"
                                            ? "bg-red-100"
                                            : "bg-white"
                                        }
                                    />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-xs ml-72 pl-4">**Put this amount in section 6**</p>
        </div>
    )
}

export default HouseExpensesTable;