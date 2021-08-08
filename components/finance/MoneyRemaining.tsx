export interface MoneyRemainingTableProps {
  totalMonthlySection7: string;
  setTotalMonthlySection7: (totalMonthlySection7: string) => void;
  grocery: string;
  setGrocery: (grocery: string) => void;
  totalAdditional: string;
  setTotalAdditional: (totalAdditional: string) => void;
  sumAddValidation: string;
  setSumAddValidation: (sumAddValidation: string) => void;
}

const MoneyRemainingTable = ({
  totalMonthlySection7,
  setTotalMonthlySection7,
  grocery,
  setGrocery,
  totalAdditional,
  setTotalAdditional,
  sumAddValidation,
  setSumAddValidation,
}: MoneyRemainingTableProps) => {
  const validateTotalIncome = (newTotalMonthlySection7) => {
    newTotalMonthlySection7 + grocery === ""
      ? setSumAddValidation("")
      : Number.parseInt(newTotalMonthlySection7) + Number.parseInt(grocery) ===
        Number.parseInt(newTotalMonthlySection7)
      ? setSumAddValidation("Correct")
      : setSumAddValidation("Wrong");
  };
  return (
    <div>
      <h1 className={"font-bold"}>
        Section 7: Money remaining after expenses are paid
      </h1>
      <p> Subtract your total expenses from your total monthly income.</p>
      <table className={"fixed-width w-auto border-collapse"}>
        <thead>
          <tr>
            <th className="w-1/2"></th>
            <th className="w-1/2"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={"border border-black"}>
              <p className={"mx-2"}>Total Monthly Income</p>
            </td>
            <td className={"border border-black flex flex-nowwrap"}>
              <p className={"mx-2"}>C.</p>
              <div>
                <input
                  value={totalMonthlySection7}
                  onChange={(e) => {
                    const newTotalMonthlySection7 = e.target.value;
                    setTotalMonthlySection7(newTotalMonthlySection7);
                    validateTotalIncome(newTotalMonthlySection7);
                  }}
                  placeholder="Type numbers only"
                ></input>
              </div>
            </td>
          </tr>
          <tr>
            <td className={"border border-black"}>
              <p className={"mx-2"}>Total Expenses</p>
            </td>
            <td className={"border border-black flex flex-nowrap"}>
              {" "}
              <p className={"mx-2"}>R.</p>
              <div>
                <input
                  value={grocery}
                  onChange={(e) => setGrocery(e.target.value)}
                  placeholder="Type numbers only"
                ></input>
              </div>
            </td>
          </tr>
          <tr>
            <td className={"border border-black bg-green-300 font-bold"}>
              {" "}
              <p className={"mx-2"}>Total Money Remaining</p>
            </td>
            <td className={"border border-black flex flex-nowrap"}>
              <p className={"mx-2"}>S.</p>
              <div>
                <input
                  value={totalAdditional}
                  onChange={(e) => {
                    const newTotalAddition = e.target.value;
                    setTotalAdditional(newTotalAddition);
                  }}
                  placeholder="Type numbers only"
                  className={
                    sumAddValidation === ""
                      ? "bg-white"
                      : sumAddValidation === "Correct"
                      ? "bg-green-200"
                      : sumAddValidation === "Wrong"
                      ? "bg-red-200"
                      : "bg-white"
                  }
                ></input>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p className={"ml-60 text-xs"}>**Put this amount in section 6** </p>
    </div>
  );
};

export default MoneyRemainingTable;
