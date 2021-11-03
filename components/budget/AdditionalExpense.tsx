import { useSelector } from "react-redux";
import { assignmentSessionSelector, setGrocery, setPhone, setSumAddValidation, setTotalAdditional, setTvInternet } from "../../redux/assignmentSession";
import { useAppDispatch } from "../../redux/store";

const AdditionalTable = () => {

  const assignmentSession = useSelector(assignmentSessionSelector)
  const dispatch = useAppDispatch()

  const validate = (newTotalAddition) => {
    assignmentSession.tvInternet + assignmentSession.phone + assignmentSession.grocery === ""
      ? dispatch(setSumAddValidation(""))
      : Number.parseFloat(assignmentSession.tvInternet) +
        Number.parseInt(assignmentSession.phone) +
        Number.parseInt(assignmentSession.grocery) ===
        Number.parseInt(newTotalAddition)
        ? dispatch(setSumAddValidation("Correct"))
        : dispatch(setSumAddValidation("Wrong"));
  };
  return (
    <div>
      <h1 className="sticky top-0 font-bold p-4 bg-green-300 text-white rounded-xl mb-5">
        Section 5: Additional Expenses
      </h1>
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
                  value={assignmentSession.tvInternet}
                  onChange={(e) => {
                    const newTvInternet = e.target.value;
                    dispatch(setTvInternet(e.target.value))
                  }}
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
                  value={assignmentSession.phone}
                  onChange={(e) => {
                    const newPhone = e.target.value;
                    dispatch(setPhone(e.target.value))
                  }}
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
                  value={assignmentSession.grocery}
                  onChange={(e) => {
                    const newGrocery = e.target.value;
                    dispatch(setGrocery(e.target.value))
                  }}
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
                  value={assignmentSession.totalAdditional}
                  onChange={(e) => {
                    const newTotalAddition = e.target.value;
                    dispatch(setTotalAdditional(newTotalAddition));
                    validate(newTotalAddition);
                  }}
                  placeholder="Type numbers only"
                  className={
                    assignmentSession.sumAddValidation === ""
                      ? "bg-white"
                      : assignmentSession.sumAddValidation === "Correct"
                        ? "bg-green-200"
                        : assignmentSession.sumAddValidation === "Wrong"
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
