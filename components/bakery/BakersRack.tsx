import ReactCardFlip from "react";

export interface BakersRackProps {
  cupNum1: any;
  setCupNum1: (cumNum1: any) => void;
  cupDen1: any;
  setCupDen1: (cupDen1: any) => void;
  cupNum1Correct: string;
  setCupNum1Correct: (cupNum1Correct: string) => void;
  cupDen1Correct: string;
  setCupDen1Correct: (cupDen1Correct: string) => void;
  cupNum2: string;
  setCupNum2: (cupNum2: string) => void;
  cupDen2: string;
  setCupDen2: (cupDen2: string) => void;
  cupNum2Correct: any;
  setCupNum2Correct: (cupNum2Correct: any) => void;
  cupDen2Correct: any;
  setCupDen2Correct: (cupDen2Correct: any) => void;
  breadNum1: string;
  setBreadNum1: (breadNum1: string) => void;
  breadDen1: string;
  setBreadDen1: (breadDen1: string) => void;

  breadNum2: any;
  setBreadNum2: (breadNum2: any) => void;
  breadDen2: any;
  setBreadDen2: (setBreadDen2: any) => void;

  pieNum1: string;
  setPieNum1: (pieNum1: string) => void;
  pieDen1: string;
  setPieDen1: (pieDen1: string) => void;

  pieNum2: any;
  setPieNum2: (pieNum2: any) => void;
  pieDen2: any;
  setPieDen2: (pieDen2: any) => void;
}

const BakersRack = ({
  cupNum1,
  setCupNum1,
  cupDen1,
  setCupDen1,
  cupNum1Correct,
  setCupNum1Correct,
  cupDen1Correct,
  setCupDen1Correct,
  cupNum2,
  setCupNum2,
  cupDen2,
  setCupDen2,
  cupNum2Correct,
  setCupNum2Correct,
  cupDen2Correct,
  setCupDen2Correct,
  breadNum1,
  setBreadNum1,
  breadDen1,
  setBreadDen1,
  breadNum2,
  setBreadNum2,
  breadDen2,
  setBreadDen2,
  pieNum1,
  setPieNum1,
  pieDen1,
  setPieDen1,
  pieNum2,
  setPieNum2,
  pieDen2,
  setPieDen2,
}: BakersRackProps) => {
  const validateCupNum1 = (newCupNum1: string) => {
    if (newCupNum1 === "12") {
      setCupNum1Correct("Correct");
    } else {
      setCupNum1Correct("");
    }
  };
  const validateCupDen1 = (newCupDen1: string) => {
    if (newCupDen1 === "63") {
      setCupDen1Correct("Correct");
    } else {
      setCupDen1Correct("");
    }
  };

  const validateCupNum2 = (newCupNum2: string) => {
    setCupNum2Correct(newCupNum2);
  };
  const validateCupDen2 = (newCupDen2: string) => {
    setCupDen2Correct(newCupDen2);
  };
  return (
    <div>
      <div className={"grid grid-cols-2 mx-12"}>
        <div
          className={
            "text-8xl col-start-1 col-span-1 font-bold text-red-200 ml-8 "
          }
        >
          Baker's Rack
        </div>
        <div
          className={
            "col-start-2 col-span-1 ml-12 mr-12 mt-8 flex justify-center text-center font-bold "
          }
        >
          As you begin to plan out your bakery, your first order of business is
          determining how much of each of your baked goods you will have for
          sale. Let the planning begin!
        </div>
      </div>
      <div className={"grid"}>
        <div className={"text-5xl ml-32 col-start-1 col-span-1 w-1/6 mb-4 "}>
          Bakery Items
        </div>
        <div className={"col-start-2 col-span-1 mr-12 mt-4 text-center"}>
          You have six different varieties of baked goods in your store,
          including cupcakes, bread, pies, brownies, cakes and cookies. To
          begin, you will have 126 items in your store every day. Complete the
          table to show what fraction of each item you will have in your store
          each day. Reduce the fraction to simplest terms, then write anohter
          fraction that is equivalent.
        </div>
      </div>
      <table className={"table-fixed mx-16 text-xl"}>
        <thead
          className={
            "border border-collapse border-black bg-green-200 text-center"
          }
        >
          <th className={"w-1/4 border border-collapse border-black"}>
            {" "}
            TYPE OF ITEM
          </th>
          <th className={"w-1/4 border border-black border-collapse"}>
            {" "}
            FRACTION IN STORE
          </th>
          <th className={"w-1/4 border border-black border-collapse"}>
            {" "}
            REDUCED SIMPLEST FORM{" "}
          </th>
          <th className={"w-1/4 border border-black border-collapse"}>
            {" "}
            EQUIVALENT FRACTION
          </th>
        </thead>
        <tbody className={"text-center border border-collapse border-black"}>
          <tr className={"border border-black h-12"}>
            <td className={"border border-black"}> CUPCAKES </td>
            <td className={"border border-black"}> 24/126</td>
            <td>
              <div className={"grid grid-cols-12"}>
                <input
                  className={
                    cupNum1Correct === "Correct" && cupDen1Correct === "Correct"
                      ? "flex justify-center col-start-4 col-span-2 bg-green-100 text-center"
                      : "flex justify-center col-start-4 col-span-2 bg-yellow-100 text-center"
                  }
                  value={cupNum1}
                  onChange={(e) => {
                    const newCupNum1 = e.target.value;
                    setCupNum1(newCupNum1);
                    validateCupNum1(newCupNum1);
                  }}
                ></input>
                <div className={"col-start-7 col-span-1  text-center "}>/</div>
                <input
                  className={
                    cupNum1Correct === "Correct" && cupDen1Correct === "Correct"
                      ? "flex justify-centern col-start-9 col-span-2 bg-green-100 text-center  "
                      : "flex justify-centern col-start-9 col-span-2 bg-yellow-100 text-center  "
                  }
                  value={cupDen1}
                  onChange={(e) => {
                    const newCupDen1 = e.target.value;
                    setCupDen1(newCupDen1);
                    validateCupDen1(newCupDen1);
                  }}
                ></input>
              </div>
            </td>
            <td className={"border border-black"}>
              <div className={"grid grid-cols-12"}>
                <input
                  className={
                    cupNum2Correct / cupDen2Correct === 12 / 63
                      ? "col-start-4 col-span-2 bg-green-100 text-center"
                      : "col-start-4 col-span-2 bg-yellow-100 text-center"
                  }
                  value={cupNum2}
                  onChange={(e) => {
                    const newCupNum2 = e.target.value;
                    setCupNum2(newCupNum2);
                    validateCupNum2(newCupNum2);
                  }}
                ></input>
                <div className={"col-start-7 col-span-1  text-center "}>/ </div>
                <input
                  className={
                    cupNum2Correct / cupDen2Correct === 12 / 63
                      ? "flex justify-centern col-start-9 col-span-2 bg-green-100 text-center  "
                      : "flex justify-centern col-start-9 col-span-2 bg-yellow-100 text-center  "
                  }
                  value={cupDen2}
                  onChange={(e) => {
                    const newCupDen2 = e.target.value;
                    setCupDen2(newCupDen2);
                    validateCupDen2(newCupDen2);
                  }}
                ></input>
              </div>
            </td>
          </tr>
          <tr className={"border border-black h-12"}>
            <td className={"border border-black"}> BREAD </td>
            <td className={"border border-black"}> 6/126</td>
            <td>
              <div className={"grid grid-cols-12"}>
                <input
                  className={
                    breadNum1 === "1" && breadDen1 === "21"
                      ? "flex justify-center col-start-4 col-span-2 bg-green-100 text-center"
                      : "flex justify-center col-start-4 col-span-2 bg-yellow-100 text-center"
                  }
                  value={breadNum1}
                  onChange={(e) => {
                    const newBreadNum1 = e.target.value;
                    setBreadNum1(newBreadNum1);
                  }}
                ></input>
                <div className={"col-start-7 col-span-1  text-center "}>/</div>
                <input
                  className={
                    breadNum1 === "1" && breadDen1 === "21"
                      ? "flex justify-centern col-start-9 col-span-2 bg-green-100 text-center"
                      : "flex justify-centern col-start-9 col-span-2 bg-yellow-100 text-center"
                  }
                  value={breadDen1}
                  onChange={(e) => {
                    const newBreadDen1 = e.target.value;
                    setBreadDen1(newBreadDen1);
                  }}
                ></input>
              </div>
            </td>
            <td className={"border border-black"}>
              <div className={"grid grid-cols-12"}>
                <input
                  className={
                    breadNum2 / breadDen2 === 1 / 21
                      ? "col-start-4 col-span-2 bg-green-100 text-center"
                      : "col-start-4 col-span-2 bg-yellow-100 text-center"
                  }
                  value={breadNum2}
                  onChange={(e) => {
                    const newBreadNum2 = e.target.value;
                    setBreadNum2(newBreadNum2);
                  }}
                ></input>
                <div className={"col-start-7 col-span-1  text-center "}>/</div>
                <input
                  className={
                    breadNum2 / breadDen2 === 1 / 21
                      ? "flex justify-centern col-start-9 col-span-2 bg-green-100 text-center"
                      : "flex justify-centern col-start-9 col-span-2 bg-yellow-100 text-center"
                  }
                  value={breadDen2}
                  onChange={(e) => {
                    const newBreadDen2 = e.target.value;
                    setBreadDen2(newBreadDen2);
                  }}
                ></input>
              </div>
            </td>
          </tr>
          <tr className={"border border-black h-12"}>
            <td className={"border border-black"}> PIE </td>
            <td className={"border border-black"}> 12/126</td>
            <td>
              <div className={"grid grid-cols-12"}>
                <input
                  className={
                    pieNum1 === "2" && pieDen1 === "21"
                      ? "flex justify-center col-start-4 col-span-2 bg-green-100 text-center "
                      : "flex justify-center col-start-4 col-span-2 bg-yellow-100 text-center "
                  }
                  value={pieNum1}
                  onChange={(e) => {
                    const newPieNum1 = e.target.value;
                    setPieNum1(newPieNum1);
                  }}
                ></input>
                <div className={"col-start-7 col-span-1  text-center "}>/</div>
                <input
                  className={
                    pieNum1 === "2" && pieDen1 === "21"
                      ? "flex justify-centern col-start-9 col-span-2 bg-green-100 text-center "
                      : "flex justify-centern col-start-9 col-span-2 bg-yellow-100 text-center "
                  }
                  value={pieDen1}
                  onChange={(e) => {
                    const newPieDen1 = e.target.value;
                    setPieDen1(newPieDen1);
                  }}
                ></input>
              </div>
            </td>
            <td className={"border border-black"}>
              <div className={"grid grid-cols-12"}>
                <input
                  className={
                    pieNum2 / pieDen2 === 2 / 21
                      ? "col-start-4 col-span-2 bg-green-100 text-center"
                      : "col-start-4 col-span-2 bg-yellow-100 text-center"
                  }
                  value={pieNum2}
                  onChange={(e) => {
                    const newPieNum2 = e.target.value;
                    setPieNum2(newPieNum2);
                  }}
                ></input>
                <div className={"col-start-7 col-span-1  text-center "}>/</div>
                <input
                  className={
                    pieNum2 / pieDen2 === 2 / 21
                      ? "flex justify-centern col-start-9 col-span-2 bg-green-100 text-center"
                      : "flex justify-centern col-start-9 col-span-2 bg-yellow-100 text-center"
                  }
                  value={pieDen2}
                  onChange={(e) => {
                    const newPieDen2 = e.target.value;
                    setPieDen2(newPieDen2);
                  }}
                ></input>
              </div>
            </td>
          </tr>
          <tr className={"border border-black h-12"}>
            <td className={"border border-black"}> BROWNIES </td>
            <td className={"border border-black"}> /126</td>
            <td className={"border border-black"}> 2/7</td>
            <td className={"border border-black"}>
              <div className={"grid grid-cols-12"}>
                <input
                  className={"col-start-4 col-span-2 bg-yellow-100"}
                ></input>
                <div className={"col-start-7 col-span-1  text-center "}>/</div>
                <input
                  className={
                    "flex justify-centern col-start-9 col-span-2 bg-yellow-100  "
                  }
                ></input>
              </div>
            </td>
          </tr>
          <tr className={"border border-black h-12"}>
            <td className={"border border-black"}> CAKES </td>
            <td className={"border border-black"}> /126</td>
            <td className={"border border-black"}> 1/21</td>
            <td className={"border border-black"}>
              <div className={"grid grid-cols-12"}>
                <input
                  className={"col-start-4 col-span-2 bg-yellow-100"}
                ></input>
                <div className={"col-start-7 col-span-1  text-center "}>/</div>
                <input
                  className={
                    "flex justify-centern col-start-9 col-span-2 bg-yellow-100  "
                  }
                ></input>
              </div>
            </td>
          </tr>
          <tr className={"border border-black h-12"}>
            <td className={"border border-black"}> COOKIES </td>
            <td className={"border border-black"}> /126</td>
            <td className={"border border-black"}> 1/3</td>
            <td className={"border border-black"}>
              <div className={"grid grid-cols-12"}>
                <input
                  className={"col-start-4 col-span-2 bg-yellow-100"}
                ></input>
                <div className={"col-start-7 col-span-1  text-center "}>/</div>
                <input
                  className={
                    "flex justify-centern col-start-9 col-span-2 bg-yellow-100  "
                  }
                ></input>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BakersRack;
