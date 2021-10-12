import react from "react";
import { Provider, useSelector } from "react-redux";
import {
  bakersRackBSelector,
  setBreadMinCake,
  setBreadMinCakeDen,
  setBreadMinCakeNum,
  setBrowMinBread,
  setBrowMinBreadDen,
  setBrowMinBreadNum,
  setBrowPlusCake,
  setBrowPlusCakeDen,
  setBrowPlusCakeNum,
  setCookMinCake,
  setCookMinCakeDen,
  setCookMinCakeNum,
  setCupMinPie,
  setCupMinPieDen,
  setCupMinPieNum,
  setCupPlusCook,
  setCupPlusCookDen,
  setCupPlusCookNum,
  setPiePlusBread,
  setPiePlusBreadDen,
  setPiePlusBreadNum,
  setPiePlusCook,
  setPiePlusCookDen,
  setPiePlusCookNum,
} from "../../redux/bakerBSlice";
import { useAppDispatch } from "../../redux/store";
import CoopStoryComponent from "../mathBattle/coop/CoopNarrative";

const BakersRackB = () => {
  const piePlusBread = useSelector(bakersRackBSelector).piePlusBread;
  const piePlusBreadNum = useSelector(bakersRackBSelector).piePlusBreadNum;
  const piePlusBreadDen = useSelector(bakersRackBSelector).piePlusBreadDen;
  const cupPlusCook = useSelector(bakersRackBSelector).cupPlusCook;
  const cupPlusCookNum = useSelector(bakersRackBSelector).cupPlusCookNum;
  const cupPlusCookDen = useSelector(bakersRackBSelector).cupPlusCookDen;
  const browPlusCake = useSelector(bakersRackBSelector).browPlusCake;
  const browPlusCakeNum = useSelector(bakersRackBSelector).browPlusCakeNum;
  const browPlusCakeDen = useSelector(bakersRackBSelector).browPlusCakeDen;
  const piePlusCook = useSelector(bakersRackBSelector).piePlusCook;
  const piePlusCookNum = useSelector(bakersRackBSelector).piePlusCookNum;
  const piePlusCookDen = useSelector(bakersRackBSelector).piePlusCookDen;
  const cookMinCake = useSelector(bakersRackBSelector).cookMinCake;
  const cookMinCakeNum = useSelector(bakersRackBSelector).cookMinCakeNum;
  const cookMinCakeDen = useSelector(bakersRackBSelector).cookMinCakeDen;
  const browMinBread = useSelector(bakersRackBSelector).browMinBread;
  const browMinBreadNum = useSelector(bakersRackBSelector).browMinBreadNum;
  const browMinBreadDen = useSelector(bakersRackBSelector).browMinBreadDen;
  const cupMinPie = useSelector(bakersRackBSelector).cupMinPie;
  const cupMinPieNum = useSelector(bakersRackBSelector).cupMinPieNum;
  const cupMinPieDen = useSelector(bakersRackBSelector).cupMinPieDen;
  const breadMinCake = useSelector(bakersRackBSelector).breadMinCake;
  const breadMinCakeNum = useSelector(bakersRackBSelector).breadMinCakeNum;
  const breadMinCakeDen = useSelector(bakersRackBSelector).breadMinCakeDen;

  const dispatch = useAppDispatch();

  const valPPB = (newPiePlusBread) => {
    const valPPBArr = newPiePlusBread.split("/");

    dispatch(setPiePlusBreadNum(valPPBArr[0])); //get this into redux then auto val will work
    dispatch(setPiePlusBreadDen(valPPBArr[1]));
  };

  const valCPC = (newCupPlusCook) => {
    const valCPCArr = newCupPlusCook.split("/");

    dispatch(setCupPlusCookNum(valCPCArr[0]));
    dispatch(setCupPlusCookDen(valCPCArr[1]));
  };

  const valBPC = (newBrowPlusCake) => {
    const valBPCArr = newBrowPlusCake.split("/");
    dispatch(setBrowPlusCakeNum(valBPCArr[0]));
    dispatch(setBrowPlusCakeDen(valBPCArr[1]));
  };

  const valPPC = (newPiePlusCook) => {
    const valPPCArr = newPiePlusCook.split("/");
    dispatch(setPiePlusCookNum(valPPCArr[0]));
    dispatch(setPiePlusCookDen(valPPCArr[1]));
  };

  const valCMC = (newCookMinCake) => {
    const valCMCArr = newCookMinCake.split("/");
    dispatch(setCookMinCakeNum(valCMCArr[0]));
    dispatch(setCookMinCakeDen(valCMCArr[1]));
  };

  const valBMB = (newBrowMinBread) => {
    const valBMBArr = newBrowMinBread.split("/");
    dispatch(setBrowMinBreadNum(valBMBArr[0]));
    dispatch(setBrowMinBreadDen(valBMBArr[1]));
  };

  const valCMP = (newCupMinPie) => {
    const valCMPArr = newCupMinPie.split("/");
    dispatch(setCupMinPieNum(valCMPArr[0]));
    dispatch(setCupMinPieDen(valCMPArr[1]));
  };

  const valBMC = (newBreadMinCake) => {
    const valBMCArr = newBreadMinCake.split("/");
    dispatch(setBreadMinCakeNum(valBMCArr[0]));
    dispatch(setBreadMinCakeDen(valBMCArr[1]));
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
            *Challenge: Use only the numbers from the "Equivalent Fractions"*{" "}
          </div>
          <div className={"text-red-400 font-bold mt-4"}>
            {" "}
            NOTE: Please put answers in the format of [numerator] /
            [denominator]. Example: 4/10
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
                  dispatch(setPiePlusBread(newPiePlusBread));
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
                  dispatch(setCupPlusCook(newCupPlusCook));
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
                  dispatch(setBrowPlusCake(newBrowPlusCake));
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
                  dispatch(setPiePlusCook(newPiePlusCook));
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
                <input
                  className={
                    cookMinCakeNum / cookMinCakeDen === 6 / 21
                      ? "bg-green-100 text-center"
                      : "bg-yellow-100 text-center"
                  }
                  value={cookMinCake}
                  onChange={(e) => {
                    const newCookMinCake = e.target.value;
                    dispatch(setCookMinCake(newCookMinCake));
                    valCMC(newCookMinCake);
                  }}
                ></input>
                <div className={"text-red-300 ml-4 text-left text-xl mt-8"}>
                  {" "}
                  Brownies - Bread =
                </div>
                <input
                  className={
                    browMinBreadNum / browMinBreadDen === 5 / 21
                      ? "bg-green-100 text-center"
                      : "bg-yellow-100 text-center"
                  }
                  value={browMinBread}
                  onChange={(e) => {
                    const newBrowMinBread = e.target.value;
                    dispatch(setBrowMinBread(newBrowMinBread));
                    valBMB(newBrowMinBread);
                  }}
                ></input>
                <div className={"text-red-300 ml-4 text-left text-xl mt-8"}>
                  {" "}
                  Cupcake - Pie =
                </div>
                <input
                  className={
                    cupMinPieNum / cupMinPieDen === 6 / 63
                      ? "bg-green-100 text-center"
                      : "bg-yellow-100 text-center"
                  }
                  value={cupMinPie}
                  onChange={(e) => {
                    const newCupMinPie = e.target.value;
                    dispatch(setCupMinPie(newCupMinPie));
                    valCMP(newCupMinPie);
                  }}
                ></input>
                <div className={"text-red-300 ml-4 text-left text-xl mt-8"}>
                  {" "}
                  Bread - Cake =
                </div>
                <input
                  className={
                    breadMinCakeNum / breadMinCakeDen === 0 / 1
                      ? "bg-green-100 text-center"
                      : "bg-yellow-100 text-center"
                  }
                  value={breadMinCake}
                  onChange={(e) => {
                    const newBreadMinCake = e.target.value;
                    dispatch(setBreadMinCake(newBreadMinCake));
                    valBMC(newBreadMinCake);
                  }}
                ></input>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BakersRackB;
