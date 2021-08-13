export interface AdditionalTableProps {
  tvInternet: string;
  setTvInternet: (tvInternet: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  grocery: string;
  setGrocery: (grocery: string) => void;
  totalAdditional: string;
  setTotalAdditional: (totalAdditional: string) => void;
  sumAddValidation: string;
  setSumAddValidation: (sumAddValidation: string) => void;
}

const AdditionalTable = ({
  tvInternet,
  setTvInternet,
  phone,
  setPhone,
  grocery,
  setGrocery,
  totalAdditional,
  setTotalAdditional,
  sumAddValidation,
  setSumAddValidation,
}: AdditionalTableProps) => {
  const validate = (newTotalAddition) => {
    tvInternet + phone + grocery === ""
      ? setSumAddValidation("")
      : Number.parseFloat(tvInternet) +
          Number.parseInt(phone) +
          Number.parseInt(grocery) ===
        Number.parseInt(newTotalAddition)
      ? setSumAddValidation("Correct")
      : setSumAddValidation("Wrong");
  };
  return (
    <div>
      <h1 className={"font-bold mt-10"}>Section 5: Additional Expenses</h1>
      <p> Add up your expenses in this section and put the total in Box Q</p>
      <table className={"fixed-width w-auto border-collapse"}>
        <thead>
          <tr>
            <th className={"bg-green-300 border border-black"}> Expense </th>
            <th className={"bg-green-300 border border-black"}>
              {" "}
              Cost per Month
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={"mx-2 border border-black"}>
              {" "}
              <p className={"mx-2"}>TV/Internet Bill</p>
            </td>
            <td className={"border border-black flex flex-nowrap"}>
              {" "}
              <p className={"mx-2"}>N.</p>
              <div>
                <input
                  value={tvInternet}
                  onChange={(e) => setTvInternet(e.target.value)}
                  placeholder="Type numbers only"
                ></input>
              </div>
            </td>
          </tr>
          <tr>
            <td className={"border border-black"}>
              <p className={"mx-2"}>Phone Bill</p>
            </td>
            <td className={"border border-black flex flex-nowwrap"}>
              <p className={"mx-2"}>O.</p>
              <div>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Type numbers only"
                ></input>
              </div>
            </td>
          </tr>
          <tr>
            <td className={"border border-black"}>
              <p className={"mx-2"}>Grocery Bill</p>
            </td>
            <td className={"border border-black flex flex-nowrap"}>
              {" "}
              <p className={"mx-2"}>P.</p>
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
              <p className={"mx-2"}>Total Additional Costs</p>
            </td>
            <td className={"border border-black flex flex-nowrap"}>
              <p className={"mx-2"}>Q.</p>
              <div>
                <input
                  value={totalAdditional}
                  onChange={(e) => {
                    const newTotalAddition = e.target.value;
                    setTotalAdditional(newTotalAddition);
                    validate(newTotalAddition);
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

export default AdditionalTable;
