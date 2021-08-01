import { ReactNode } from "react";

export const FarmHouseTable = () => {
    return (
        <table className="shadow-md bg-white">
            <thead>
            <tr>
                <th className="bg-green-300 border border-black text-center w-40">Bedrooms</th>
                <th className="bg-green-300 border border-black text-center w-40">Bathrooms</th>
                <th className="bg-green-300 border border-black text-center w-40">Cost Per Month</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="border border-black text-center">1</td>
                <td className="border border-black text-center">1</td>
                <td className="border border-black text-center">$650</td>
            </tr>
            <tr>
                <td className="border border-black text-center">2</td>
                <td className="border border-black text-center">1</td>
                <td className="border border-black text-center">$750</td>
            </tr>
            <tr>
                <td className="border border-black text-center">3</td>
                <td className="border border-black text-center">2</td>
                <td className="border border-black text-center">$900</td>
            </tr>
            <tr>
                <td className="border border-black text-center">4</td>
                <td className="border border-black text-center">3</td>
                <td className="border border-black text-center">$1200</td>
            </tr>
            </tbody>
        </table>
    );
};


export const SuburbHouseTable = () => {
    return (
        <table className="shadow-md bg-white">
            <thead>
            <tr>
                <th className="bg-green-300 border border-black text-center w-40">Bedrooms</th>
                <th className="bg-green-300 border border-black text-center w-40">Bathrooms</th>
                <th className="bg-green-300 border border-black text-center w-40">Cost Per Month</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="border border-black text-center">1</td>
                <td className="border border-black text-center">1</td>
                <td className="border border-black text-center">$800</td>
            </tr>
            <tr>
                <td className="border border-black text-center">2</td>
                <td className="border border-black text-center">1</td>
                <td className="border border-black text-center">$900</td>
            </tr>
            <tr>
                <td className="border border-black text-center">3</td>
                <td className="border border-black text-center">2</td>
                <td className="border border-black text-center">$1300</td>
            </tr>
            <tr>
                <td className="border border-black text-center">4</td>
                <td className="border border-black text-center">3</td>
                <td className="border border-black text-center">$1600</td>
            </tr>
            </tbody>
        </table>
    );
};

export default FarmHouseTable;
