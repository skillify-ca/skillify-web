import { ReactNode } from "react";

const totalExpensesTable = () => {

    return (

        <div>
            <p>Section 6: Total Expenses</p>
            <p>Add up your expenses in this section and put the total in Box R.</p>
            <table>
                <thead>
                    <tr>
                        <th className="border border-black bg-green-300">Expense</th>
                        <th className="border border-black bg-green-300">Cost per Month</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-black"> Total Housing Costs</td>
                        <td className="border border-black">H. <input type="text" /></td>
                    </tr>
                    <tr>
                        <td className="border border-black">Total Car Costs</td>
                        <td className="border border-black">M. <input type="text" /></td>
                    </tr>
                    <tr>
                        <td className="border border-black">Total Additional Costs</td>
                        <td className="border border-black">Q. <input type="text" /></td>
                    </tr>
                    <tr>
                        <td className="border border-black">Total Expenses</td>
                        <td className="border border-black">R. <input type="text" /></td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default totalExpensesTable();
