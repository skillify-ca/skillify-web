import react from "react";

export interface BakersRackB {
  piePlusBread: string;
  setPiePlusBread: (piePlusBread: string) => void;
  piePlusBreadNum: any;
  setPiePlusBreadNum: (piePlusBreadNum: any) => void;
  piePlusBreadDen: any;
  setPiePlusBreadDen: (piePlusBreadDen: any) => void;
  cupPlusCook: string;
  setCupPlusCook: (cupPlusCook: string) => void;
  cupPlusCookNum: any;
  setCupPlusCookNum: (cupPlusCookNum: any) => void;
  cupPlusCookDen: any;
  setCupPlusCookDen: (cupPlusCookDen: any) => void;
  browPlusCake: string;
  setBrowPlusCake: (browPlusCake: string) => void;
  browPlusCakeNum: any;
  setBrowPlusCakeNum: (browPlusCakeNum: any) => void;
  browPlusCakeDen: any;
  setBrowPlusCakeDen: (browPlusCakeDen: any) => void;
  piePlusCook: string;
  setPiePlusCook: (piePlusCook: string) => void;
  piePlusCookNum: any;
  setPiePlusCookNum: (piePlusCookNum: any) => void;
  piePlusCookDen: any;
  setPiePlusCookDen: (piePlusCookDen: any) => void;
}

const BakersRackB = ({
  piePlusBread,
  setPiePlusBread,
  piePlusBreadNum,
  setPiePlusBreadNum,
  piePlusBreadDen,
  setPiePlusBreadDen,
  cupPlusCook,
  setCupPlusCook,
  cupPlusCookNum,
  setCupPlusCookNum,
  cupPlusCookDen,
  setCupPlusCookDen,
  browPlusCake,
  setBrowPlusCake,
  browPlusCakeNum,
  setBrowPlusCakeNum,
  browPlusCakeDen,
  setBrowPlusCakeDen,
  piePlusCook,
  setPiePlusCook,
  piePlusCookNum,
  setPiePlusCookNum,
  piePlusCookDen,
  setPiePlusCookDen,
}: BakersRackB) => {
  const valPPB = (newPiePlusBread) => {
    const valPPBArr = newPiePlusBread.split("/");
    setPiePlusBreadNum(valPPBArr[0]);
    setPiePlusBreadDen(valPPBArr[1]);
  };

  const valCPC = (newCupPlusCook) => {
    const valCPCArr = newCupPlusCook.split("/");
    setCupPlusCookNum(valCPCArr[0]);
    setCupPlusCookDen(valCPCArr[1]);
  };

  const valBPC = (newBrowPlusCake) => {
    const valBPCArr = newBrowPlusCake.split("/");
    setBrowPlusCakeNum(valBPCArr[0]);
    setBrowPlusCakeDen(valBPCArr[1]);
  };

  const valPPC = (newPiePlusCook) => {
    const valPPCArr = newPiePlusCook.split("/");
    setPiePlusCookNum(valPPCArr[0]);
    setPiePlusCookDen(valPPCArr[1]);
  };

  return (
    <div>
      {" "}
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
      <div className={"text-4xl ml-32  mb-4 text-center mt-4 "}>
        Use the Baker's Rack table to complete this sections
      </div>
      <div className={"grid grid-cols-5 mx-8"}>
        <div className={"col-start-1 col-span-1 border-4 border-black"}>
          <div className={"text-center mx-4"}>
            Use the dropdowns below to compare the fraction of baked goods in
            the store
          </div>
          <div className={"grid grid-cols-3 text-center"}>
            <div className={"col-start-1 col-span-1 mt-8"}> Cookies</div>
            <form className={"col-start-2 col-span-1 mt-8 "}>
              <select className={"border border-black"}>
                <option> less than </option>
                <option> more than </option>
                <option> equals</option>
              </select>
            </form>
            <div className={"col-start-3 col-span-1 mt-8"}> Brownies </div>
          </div>
          <div className={"grid grid-cols-3 text-center"}>
            <div className={"col-start-1 col-span-1 mt-8"}> Cupcakes</div>
            <form className={"col-start-2 col-span-1 mt-8"}>
              <select className={"border border-black"}>
                <option> less than </option>
                <option> more than </option>
                <option> equals</option>
              </select>
            </form>
            <div className={"col-start-3 col-span-1 mt-8"}> Brownies </div>
          </div>
          <div className={"grid grid-cols-3 text-center"}>
            <div className={"col-start-1 col-span-1 mt-8"}> Cake</div>
            <form className={"col-start-2 col-span-1 mt-8"}>
              <select className={"border border-black"}>
                <option> less than </option>
                <option> more than </option>
                <option> equals</option>
              </select>
            </form>
            <div className={"col-start-3 col-span-1 mt-8"}> Bread </div>
          </div>
          <div className={"grid grid-cols-3 text-center"}>
            <div className={"col-start-1 col-span-1 mt-8"}> Brownies</div>
            <form className={"col-start-2 col-span-1 mt-8"}>
              <select className={"border border-black"}>
                <option> less than </option>
                <option> more than </option>
                <option> equals</option>
              </select>
            </form>
            <div className={"col-start-3 col-span-1 mt-8"}> Pie </div>
          </div>
        </div>
        <div className={"col-start-2 col-span-4 text-center"}>
          <div className={"text-xl"}>
            {" "}
            Add or subtract to find the total fraciton of baked goods
          </div>
          <div className={"font-bold"}>
            {" "}
            *Challenge: Use only the numbers from the "Equivalent Fractions"*
          </div>
          <div className={"grid grid-cols-2 mt-4"}>
            <div className={"col-start-1 col-span-1 mx-16"}>
              <div className={"text-red-300 ml-4 text-left text-xl mt-8"}>
                {" "}
                Pie + Bread =
              </div>
              <input
                className={
                  piePlusBreadNum / piePlusBreadDen === 3 / 21
                    ? "bg-green-100 text-center"
                    : "bg-yellow-100 text-center"
                }
                value={piePlusBread}
                onChange={(e) => {
                  const newPiePlusBread = e.target.value;
                  setPiePlusBread(newPiePlusBread);
                  valPPB(newPiePlusBread);
                }}
              ></input>
              <div className={"text-red-300 ml-4 text-left text-xl mt-8"}>
                {" "}
                Cupcakes + Cookies =
              </div>
              <input
                className={
                  cupPlusCookNum / cupPlusCookDen === 33 / 63
                    ? "bg-green-100 text-center"
                    : "bg-yellow-100 text-center"
                }
                value={cupPlusCook}
                onChange={(e) => {
                  const newCupPlusCook = e.target.value;
                  setCupPlusCook(newCupPlusCook);
                  valCPC(newCupPlusCook);
                }}
              ></input>
              <div className={"text-red-300 ml-4 text-left text-xl mt-8"}>
                {" "}
                Brownies + Cake =
              </div>
              <input
                className={
                  browPlusCakeNum / browPlusCakeDen === 7 / 21
                    ? "bg-green-100 text-center"
                    : "bg-yellow-100 text-center"
                }
                value={browPlusCake}
                onChange={(e) => {
                  const newBrowPlusCake = e.target.value;
                  setBrowPlusCake(newBrowPlusCake);
                  valBPC(newBrowPlusCake);
                }}
              ></input>
              <div className={"text-red-300 ml-4 text-left text-xl mt-8"}>
                {" "}
                Pie + Cookies =
              </div>
              <input
                className={
                  piePlusCookNum / piePlusCookDen === 9 / 21
                    ? "bg-green-100 text-center"
                    : "bg-yellow-100 text-center"
                }
                value={piePlusCook}
                onChange={(e) => {
                  const newPiePlusCook = e.target.value;
                  setPiePlusCook(newPiePlusCook);
                  valPPC(newPiePlusCook);
                }}
              ></input>
            </div>
            <div className={"col-start-2 col-span-1 mx-16"}>
              {" "}
              <div className={"col-start-1 col-span-1"}>
                <div className={"text-red-300 ml-4 text-left text-xl mt-8"}>
                  {" "}
                  Cookies - Cake =
                </div>
                <input className={"bg-yellow-100"}></input>
                <div className={"text-red-300 ml-4 text-left text-xl mt-8"}>
                  {" "}
                  Brownies - Bread =
                </div>
                <input className={"bg-yellow-100"}></input>
                <div className={"text-red-300 ml-4 text-left text-xl mt-8"}>
                  {" "}
                  Cupcake - Pie =
                </div>
                <input className={"bg-yellow-100"}></input>
                <div className={"text-red-300 ml-4 text-left text-xl mt-8"}>
                  {" "}
                  Bread - Cake =
                </div>
                <input className={"bg-yellow-100"}></input>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BakersRackB;
