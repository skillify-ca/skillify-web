import ReactCardFlip from "react";

export interface BakersRackProps {
  cupNum1: any;
  setCupNum1: (cumNum1: any) => void;
  cupDen1: any;
  setCupDen1: (cupDen1: any) => void;
}

const BakersRack = ({
  cupNum1,
  setCupNum1,
  cupDen1,
  setCupDen1,
}: BakersRackProps) => {

  const validateCupNum1 = (newCupNum1:string) =>{
    setCupNum1(newCupNum1);
  }
  const validateCupDen1 = (newCupDen1:string) =>{
    setCupDen1(newCupDen1);
  }

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
                  className={{ cupNum1 ==="12" && cupDen1 === "63"? 
                    "flex justify-center col-start-4 col-span-2 bg-green-100 text-center": "flex justify-center col-start-4 col-span-2 bg-yellow-100 text-center"
                  }
                  value={cupNum1}
                  onChange={(e) => {
                    const newCupNum1 = e.target.value;
                    setCupNum1(newCupNum1); validateCupNum1(newCupNum1)
                  }}
                ></input>
                <div className={"col-start-7 col-span-1  text-center "}>/</div>
                <input
                  className={
                    "flex justify-centern col-start-9 col-span-2 bg-yellow-100 text-center  "
                  }
                  value={cupDen1}
                  onChange={(e) => {
                    const newCupDen1 = e.target.value;
                    setCupDen1(newCupDen1); validateCupDen1(newCupDen1)
                  }}
                ></input>
              </div>
            </td>
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
            <td className={"border border-black"}> BREAD </td>
            <td className={"border border-black"}> 6/126</td>
            <td>
              <div className={"grid grid-cols-12"}>
                <input
                  className={
                    "flex justify-center col-start-4 col-span-2 bg-yellow-100 "
                  }
                ></input>
                <div className={"col-start-7 col-span-1  text-center "}>/</div>
                <input
                  className={
                    "flex justify-centern col-start-9 col-span-2 bg-yellow-100  "
                  }
                ></input>
              </div>
            </td>
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
            <td className={"border border-black"}> PIE </td>
            <td className={"border border-black"}> 12/126</td>
            <td>
              <div className={"grid grid-cols-12"}>
                <input
                  className={
                    "flex justify-center col-start-4 col-span-2 bg-yellow-100 "
                  }
                ></input>
                <div className={"col-start-7 col-span-1  text-center "}>/</div>
                <input
                  className={
                    "flex justify-centern col-start-9 col-span-2 bg-yellow-100  "
                  }
                ></input>
              </div>
            </td>
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
