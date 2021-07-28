import { ReactNode } from "react";

const ExpenseTable = ({}) => {
  return (
    <table className="table-fixed w-auto border-collapse">
      <thead>
        <tr>
          <th className="w-1/2"></th>
          <th className="w-1/2"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-black"> Your Monthly Income</td>
          <td className="border border-black">A.</td>
        </tr>
        <tr>
          <td className="border border-black">Your Spouses Monthly Income</td>
          <td className="border border-black">B.</td>
        </tr>
        <tr>
          <td className="border border-black bg-gray-300">
            Total Monthly Income
          </td>
          <td className="border border-black">C.</td>
        </tr>
      </tbody>
    </table>
  );
};
export default ExpenseTable;
