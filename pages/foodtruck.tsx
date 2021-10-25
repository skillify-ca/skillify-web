import React, { useState } from "react";
import BuildAFoodTruck from "../components/foodtruck/BuildAFoodTruck";
import ChooseFoodType from "../components/foodtruck/ChooseFoodType";
import ChooseNumWorkers from "../components/foodtruck/ChooseNumWorkers";
import ChooseTruckType from "../components/foodtruck/ChooseTruckType";

import OverviewOfSelections from "../components/foodtruck/OverviewOfSelections";
import {
  hotDog,
  operatingHours,
  minimumWage,
  smallTruck,
  Truck,
} from "./api/foodtruck/food";
import RevenueEquation from "../components/foodtruck/RevenueEquation";
import ProdCostEquation from "../components/foodtruck/ProdCostEquation";
import LaborCostEquation from "../components/foodtruck/LaborCostEquation";
import ProfitEquation from "../components/foodtruck/ProfitEquation";

import { Button } from "../components/ui/Button";
import { EndSession } from "../components/finance/EndSession";
import { useMutation } from "@apollo/client";
import { UNLOCK_BADGE } from "../graphql/unlockBadge";
import { useAuth } from "../lib/authContext";
import { SAVE_FOOD_TRUCK_RESULT } from "../graphql/saveFoodTruckResult";

/*
TODO fix these issues before make it obvious when food items are not selectable
Add available foods to the right progress bar
Add better spacing on the right progress bar
select worker images not showing for 3 and 4
You will sell each Hot Dog for $4. Each Hot Dog will cost $1 per plate (change wording to say it will cost you $1 to make/manufacture)
Plates per Worker per Hour (change wording to say number of plates) (use slashes instead of per)
Add hours to the right progress bar
revenue component
Plates per Hour (use slashes) and the word number
hide buttons on the last stage
*/

// set up stage flows
export default function FoodTruck(props) {
  enum STAGE {
    ChooseTruck,
    ChooseFood,
    SelectNumWorkers,
    RevenueEquation,
    ProdCostEquation,
    LaborCostEquation,
    ProfitEquation,
    SessionEnd,
  }

  const disableNextStage = (stage: STAGE) => {
    if (stage == STAGE.RevenueEquation) {
      return !revenueComponentComplete;
    } else if (stage == STAGE.ProdCostEquation) {
      return !prodCostComponentComplete;
    } else if (stage == STAGE.LaborCostEquation) {
      return !laborCostComponentComplete;
    } else if (stage == STAGE.ProfitEquation) {
      return !profitComponentComplete;
    } else {
      return false;
    }
  };

  const [stage, setStage] = useState(STAGE.ChooseTruck);

  const previousStage = () => {
    if (stage > STAGE.ChooseTruck) {
      setStage(stage - 1);
    }
  };

  const [unlockbadge, unlockBadgeData] = useMutation(UNLOCK_BADGE);

  const [savefoodtruckresult, saveFoodTruckResultData] = useMutation(
    SAVE_FOOD_TRUCK_RESULT
  );

  const { user } = useAuth();

  const awardBadge = () => {
    unlockbadge({
      variables: {
        userId: user.uid,
        badgeId: 57, //Badge ID for Food Truck Badge (in DB)
      },
    });

    savefoodtruckresult({
      variables: {
        userId: user.uid,
        badgeId: 57,
        profit: Number.parseInt(profitEquationOneBoxThree),
        timeTaken: "1:04",
      },
    });
  };

  // const saveResult = (profit: number, time_taken: string) => {
  //   savefoodtruckresult({
  //     variables: {
  //       userId: user.uid,
  //       badgeId: 57,
  //       profit: profit,
  //       time_taken: time_taken,
  //     },
  //   });
  // };

  const nextStage = () => {
    if (stage < STAGE.SessionEnd) {
      if (stage === STAGE.ProfitEquation) {
        awardBadge();
      }
      setStage(stage + 1);
    }
  };

  const renderWorkerImagesHTML = (n: string) => {
    return [...Array(Number.parseInt(n))].map((_, i) => (
      <div className="flex flex-cols" key={i}>
        <img
          className="object-contain h-3/4 w-3/4"
          src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3226091/chef-clipart.svg"
        />
      </div>
    ));
  };

  // declare child component variables

  const [userName, setUserName] = useState("");
  const [truckName, setTruckName] = useState("");
  const [truckSlogan, setTruckSlogan] = useState("");
  const [dollarAmount, setDollarAmount] = useState("");
  const [truck, setTruck] = useState(smallTruck);
  const [food, setFood] = useState(hotDog);
  const [selectedNumWorkers, setSelectedNumWorkers] = useState("1");
  const [revenueComponentComplete, setRevenueComponentComplete] = useState(
    false
  );
  const [prodCostComponentComplete, setProdCostComponentComplete] = useState(
    false
  );
  const [laborCostComponentComplete, setLaborCostComponentComplete] = useState(
    false
  );
  const [profitComponentComplete, setProfitComponentComplete] = useState(false);

  // revenue equation one
  const [revEquationOneBoxOne, setRevEquationOneBoxOne] = useState("");
  const [revEquationOneBoxTwo, setRevEquationOneBoxTwo] = useState("");
  const [revEquationOneBoxThree, setRevEquationOneBoxThree] = useState("");

  // revenue equation two
  const [revEquationTwoBoxOne, setRevEquationTwoBoxOne] = useState("");
  const [revEquationTwoBoxTwo, setRevEquationTwoBoxTwo] = useState("");
  const [revEquationTwoBoxThree, setRevEquationTwoBoxThree] = useState("");
  const [revEquationTwoBoxFour, setRevEquationTwoBoxFour] = useState("");

  // prodCost equation one
  const [prodCostEquationOneBoxOne, setProdCostEquationOneBoxOne] = useState(
    ""
  );
  const [prodCostEquationOneBoxTwo, setProdCostEquationOneBoxTwo] = useState(
    ""
  );
  const [
    prodCostEquationOneBoxThree,
    setProdCostEquationOneBoxThree,
  ] = useState("");

  const [prodCostEquationOneBoxFour, setProdCostEquationOneBoxFour] = useState(
    ""
  );

  // prodCost equation two
  const [prodCostEquationTwoBoxOne, setProdCostEquationTwoBoxOne] = useState(
    ""
  );
  const [prodCostEquationTwoBoxTwo, setProdCostEquationTwoBoxTwo] = useState(
    ""
  );
  const [
    prodCostEquationTwoBoxThree,
    setProdCostEquationTwoBoxThree,
  ] = useState("");
  const [prodCostEquationTwoBoxFour, setProdCostEquationTwoBoxFour] = useState(
    ""
  );

  // laborCost equation one
  const [laborCostEquationOneBoxOne, setLaborCostEquationOneBoxOne] = useState(
    ""
  );
  const [laborCostEquationOneBoxTwo, setLaborCostEquationOneBoxTwo] = useState(
    ""
  );
  const [
    laborCostEquationOneBoxThree,
    setLaborCostEquationOneBoxThree,
  ] = useState("");

  const [
    laborCostEquationOneBoxFour,
    setLaborCostEquationOneBoxFour,
  ] = useState("");

  // laborCost equation two
  const [laborCostEquationTwoBoxOne, setLaborCostEquationTwoBoxOne] = useState(
    ""
  );
  const [laborCostEquationTwoBoxTwo, setLaborCostEquationTwoBoxTwo] = useState(
    ""
  );
  const [
    laborCostEquationTwoBoxThree,
    setLaborCostEquationTwoBoxThree,
  ] = useState("");
  const [
    laborCostEquationTwoBoxFour,
    setLaborCostEquationTwoBoxFour,
  ] = useState("");

  // profit equation one
  const [profitEquationOneBoxOne, setProfitEquationOneBoxOne] = useState("");
  const [profitEquationOneBoxTwo, setProfitEquationOneBoxTwo] = useState("");
  const [profitEquationOneBoxThree, setProfitEquationOneBoxThree] = useState(
    ""
  );

  const onSelectedTruckChanged = (truck: Truck) => {
    setTruck(truck);
    setFood(hotDog);
  };

  const getLeftComponent = (stage: STAGE) => {
    if (stage == STAGE.ChooseFood) {
      return (
        <ChooseFoodType
          selectedFood={food}
          setSelectedFood={setFood}
          selectedTruck={truck}
        />
      );
    } else if (stage == STAGE.ChooseTruck) {
      return (
        <ChooseTruckType truck={truck} setTruck={onSelectedTruckChanged} />
      );
    } else if (stage == STAGE.SelectNumWorkers) {
      return (
        <ChooseNumWorkers
          selectedNumWorkers={selectedNumWorkers}
          setSelectedNumWorkers={setSelectedNumWorkers}
        />
      );
    } else if (stage == STAGE.RevenueEquation) {
      return (
        <RevenueEquation
          selectedNumWorkers={selectedNumWorkers}
          selectedFood={food}
          revenueComponentComplete={revenueComponentComplete}
          setRevenueComponentComplete={setRevenueComponentComplete}
          revEquationOneBoxOne={revEquationOneBoxOne}
          setRevEquationOneBoxOne={setRevEquationOneBoxOne}
          revEquationOneBoxTwo={revEquationOneBoxTwo}
          setRevEquationOneBoxTwo={setRevEquationOneBoxTwo}
          revEquationOneBoxThree={revEquationOneBoxThree}
          setRevEquationOneBoxThree={setRevEquationOneBoxThree}
          revEquationTwoBoxOne={revEquationTwoBoxOne}
          setRevEquationTwoBoxOne={setRevEquationTwoBoxOne}
          revEquationTwoBoxTwo={revEquationTwoBoxTwo}
          setRevEquationTwoBoxTwo={setRevEquationTwoBoxTwo}
          revEquationTwoBoxThree={revEquationTwoBoxThree}
          setRevEquationTwoBoxThree={setRevEquationTwoBoxThree}
          revEquationTwoBoxFour={revEquationTwoBoxFour}
          setRevEquationTwoBoxFour={setRevEquationTwoBoxFour}
        />
      );
    } else if (stage == STAGE.ProdCostEquation) {
      return (
        <ProdCostEquation
          selectedFood={food}
          selectedTruck={truck}
          prodCostComponentComplete={prodCostComponentComplete}
          setProdCostComponentComplete={setProdCostComponentComplete}
          selectedNumWorkers={selectedNumWorkers}
          prodCostEquationOneBoxOne={prodCostEquationOneBoxOne}
          setProdCostEquationOneBoxOne={setProdCostEquationOneBoxOne}
          prodCostEquationOneBoxTwo={prodCostEquationOneBoxTwo}
          setProdCostEquationOneBoxTwo={setProdCostEquationOneBoxTwo}
          prodCostEquationOneBoxThree={prodCostEquationOneBoxThree}
          setProdCostEquationOneBoxThree={setProdCostEquationOneBoxThree}
          prodCostEquationOneBoxFour={prodCostEquationOneBoxFour}
          setProdCostEquationOneBoxFour={setProdCostEquationOneBoxFour}
          prodCostEquationTwoBoxOne={prodCostEquationTwoBoxOne}
          setProdCostEquationTwoBoxOne={setProdCostEquationTwoBoxOne}
          prodCostEquationTwoBoxTwo={prodCostEquationTwoBoxTwo}
          setProdCostEquationTwoBoxTwo={setProdCostEquationTwoBoxTwo}
          prodCostEquationTwoBoxThree={prodCostEquationTwoBoxThree}
          setProdCostEquationTwoBoxThree={setProdCostEquationTwoBoxThree}
          prodCostEquationTwoBoxFour={prodCostEquationTwoBoxFour}
          setProdCostEquationTwoBoxFour={setProdCostEquationTwoBoxFour}
        />
      );
    } else if (stage == STAGE.LaborCostEquation) {
      return (
        <LaborCostEquation
          selectedFood={food}
          selectedTruck={truck}
          selectedNumWorkers={selectedNumWorkers}
          laborCostComponentComplete={laborCostComponentComplete}
          setLaborCostComponentComplete={setLaborCostComponentComplete}
          laborCostEquationOneBoxOne={laborCostEquationOneBoxOne}
          setLaborCostEquationOneBoxOne={setLaborCostEquationOneBoxOne}
          laborCostEquationOneBoxTwo={laborCostEquationOneBoxTwo}
          setLaborCostEquationOneBoxTwo={setLaborCostEquationOneBoxTwo}
          laborCostEquationOneBoxThree={laborCostEquationOneBoxThree}
          setLaborCostEquationOneBoxThree={setLaborCostEquationOneBoxThree}
          laborCostEquationOneBoxFour={laborCostEquationOneBoxFour}
          setLaborCostEquationOneBoxFour={setLaborCostEquationOneBoxFour}
          laborCostEquationTwoBoxOne={laborCostEquationTwoBoxOne}
          setLaborCostEquationTwoBoxOne={setLaborCostEquationTwoBoxOne}
          laborCostEquationTwoBoxTwo={laborCostEquationTwoBoxTwo}
          setLaborCostEquationTwoBoxTwo={setLaborCostEquationTwoBoxTwo}
          laborCostEquationTwoBoxThree={laborCostEquationTwoBoxThree}
          setLaborCostEquationTwoBoxThree={setLaborCostEquationTwoBoxThree}
          laborCostEquationTwoBoxFour={laborCostEquationTwoBoxFour}
          setLaborCostEquationTwoBoxFour={setLaborCostEquationTwoBoxFour}
        />
      );
    } else if (stage == STAGE.ProfitEquation) {
      return (
        <ProfitEquation
          selectedFood={food}
          selectedTruck={truck}
          selectedNumWorkers={selectedNumWorkers}
          profitComponentComplete={profitComponentComplete}
          setProfitComponentComplete={setProfitComponentComplete}
          profitEquationOneBoxOne={profitEquationOneBoxOne}
          setProfitEquationOneBoxOne={setProfitEquationOneBoxOne}
          profitEquationOneBoxTwo={profitEquationOneBoxTwo}
          setProfitEquationOneBoxTwo={setProfitEquationOneBoxTwo}
          profitEquationOneBoxThree={profitEquationOneBoxThree}
          setProfitEquationOneBoxThree={setProfitEquationOneBoxThree}
        />
      );
    }
  };

  const getProgressComponent = (stage: STAGE) => {
    if (
      stage == STAGE.ChooseFood ||
      stage == STAGE.ChooseTruck ||
      stage == STAGE.SelectNumWorkers
    ) {
      return (
        <div className="flex flex-col p-8 bg-purple-200 gap-8 h-full">
          <h1 className="text-3xl text-center">Game Progress</h1>
          <div className="grid grid-cols-2 text-xl text-center items-center gap-8">
            <p>Your Stand:</p>
            <figure>
              <img className="object-contain w-60" src={truck.imageUrl} />
              <figcaption className="">{truck.model}</figcaption>
            </figure>
            <p>Your Food:</p>
            <figure>
              <img className="object-contain w-60" src={food.imageUrl} />
              <figcaption className="">{food.name}</figcaption>
            </figure>
            <p>Number of Workers:</p>
            <div className="flex flex-cols">
              {renderWorkerImagesHTML(selectedNumWorkers)}
            </div>
          </div>
        </div>
      );
    } else if (stage == STAGE.RevenueEquation) {
      return (
        <div className="flex flex-col p-8 items-center justify-center">
          <h1 className="text-5xl mb-8 text-center">Useful Inputs</h1>
          <div className="grid grid-cols-12 text-3xl space-y-2 w-full items-center">
            <p className="col-span-10">Number of Workers:</p>
            <p className="col-span-2">{selectedNumWorkers}</p>
            <p className="col-span-10">Plates / Hour (per worker):</p>
            <p className="col-span-2">{food.qtyProducedPerWorkerHour}</p>
            <p className="col-span-10">Sale Price:</p>
            <p className="col-span-2">${food.unitRevenue}</p>
            <p className="col-span-10">Hours / Day:</p>
            <p className="col-span-2">{operatingHours}</p>
          </div>
          <h1 className="text-5xl my-12">Equation Progress</h1>
          <div className="grid grid-cols-12 text-3xl w-full">
            <p className="col-span-10">
              Total Plates/Hour ({selectedNumWorkers}{" "}
              {selectedNumWorkers == "1" ? "worker" : "workers"}):
            </p>
            <p className="col-span-2">{revEquationOneBoxThree}</p>
            <p className="col-span-10">Revenue / Hour:</p>
            <p className="col-span-2">${revEquationTwoBoxThree}</p>
            <p className="col-span-10">Revenue / Day:</p>
            <p>${revEquationTwoBoxFour}</p>
          </div>
        </div>
      );
    } else if (stage == STAGE.ProdCostEquation) {
      return (
        <div className="flex flex-col p-8">
          <h1 className="text-6xl mb-8">Useful Inputs</h1>
          <div className="grid grid-cols-12 text-3xl w-full space-y-2">
            <p className="col-span-10">Plates per Hour:</p>
            <p className="col-span-2">{revEquationOneBoxThree}</p>
            <p className="col-span-10">Cost per Plate:</p>
            <p className="col-span-2">{food.unitCost}</p>
            <p className="col-span-10">Daily Rental Cost:</p>
            <p className="col-span-2">{truck.fixedCost}</p>
            <p className="col-span-10">Hourly Operating Cost:</p>
            <p className="col-span-2">{truck.variableCost}</p>
            <p className="col-span-10">Hours Working per Day:</p>
            <p className="col-span-2">{operatingHours}</p>
          </div>
          <h1 className="text-6xl my-12">Equation Progress</h1>
          <div className="grid grid-cols-12 text-3xl w-full space-y-2">
            <p className="col-span-10">Total Daily Ingredient Cost:</p>
            <p className="col-span-2">{prodCostEquationOneBoxFour}</p>
            <p className="col-span-10">Total Daily Truck Cost:</p>
            <p className="col-span-2">{prodCostEquationTwoBoxFour}</p>
          </div>
        </div>
      );
    } else if (stage === STAGE.LaborCostEquation) {
      return (
        <div className="flex flex-col p-8">
          <h1 className="text-6xl mb-8">Useful Inputs</h1>
          <div className="grid grid-cols-12 text-3xl w-full space-y-2">
            <p className="col-span-10">Number of Workers:</p>
            <p className="col-span-2">{selectedNumWorkers}</p>
            <p className="col-span-10">Minumum Hourly Wage:</p>
            <p className="col-span-2">{minimumWage}</p>
            <p className="col-span-10">Hours Operating / Day:</p>
            <p className="col-span-2">{operatingHours}</p>
            <p className="col-span-10">Total Daily Ingredient Cost:</p>
            <p className="col-span-2">{prodCostEquationOneBoxFour}</p>
            <p className="col-span-10">Total Daily Truck Rental Cost:</p>
            <p className="col-span-2">{prodCostEquationTwoBoxFour}</p>
          </div>
          <h1 className="text-6xl my-12">Equation Progress</h1>
          <div className="grid grid-cols-12 text-3xl w-full space-y-2">
            <p className="col-span-10">Total Wages per Day:</p>
            <p className="col-span-2">{laborCostEquationOneBoxFour}</p>
            <p className="col-span-10">Total Costs per Day:</p>
            <p className="col-span-2">{laborCostEquationTwoBoxFour}</p>
          </div>
        </div>
      );
    } else if (stage === STAGE.ProfitEquation) {
      return (
        <div className="flex flex-col p-8">
          <h1 className="text-6xl mb-8">Useful Inputs</h1>
          <div className="grid grid-cols-12 text-3xl space-y-2">
            <p className="col-span-10">Total Daily Revenue:</p>
            <p className="col-span-2">
              ${Number.parseInt(revEquationTwoBoxFour)}
            </p>
            <p className="col-span-10">Total Daily Costs:</p>
            <p className="col-span-2">${laborCostEquationTwoBoxFour}</p>
          </div>
          <h1 className="text-6xl my-12">Equation Progress</h1>
          <div className="grid grid-cols-12 text-3xl space-y-2">
            <p className="col-span-10">Total Revenue per Day</p>
            <p className="col-span-2">{profitEquationOneBoxOne}</p>
            <p className="col-span-10">Total Costs per Day:</p>
            <p className="col-span-2">{profitEquationOneBoxTwo}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow-0 bg-gradient-to-b from-gray-200 to-pink-100 sticky top-0 grid grid-cols-12 justify-evenly items-center border-black border-b-2 p-4">
        <div className="col-span-2 flex flex-col items-center gap-4">
          <img
            className="object-left object-contain h-16"
            src={
              "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/77310/food-truck-clipart-md.png"
            }
          />{" "}
          <Button
            backgroundColor="pink"
            textColor="white"
            label="Previous"
            onClick={previousStage}
          />
        </div>

        <h1 className="col-span-8 text-black bold text-center text-4xl p-4">
          Let's Build Your Own Food Stand!
        </h1>
        <div className="col-span-2 flex flex-col items-center gap-4">
          <img
            className="object-right object-contain h-16 invert"
            src={
              "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/77310/food-truck-clipart-md.png"
            }
          />{" "}
          <Button
            backgroundColor="pink"
            textColor="white"
            label={stage == STAGE.ProfitEquation ? "Finish!" : "Next"}
            //put write badge function here
            onClick={nextStage}
            disabled={disableNextStage(stage)}
          />
        </div>
      </div>
      {stage === STAGE.SessionEnd ? (
        <div>
          <EndSession
            onClick={() => {
              setStage(STAGE.ChooseTruck);
            }}
          />
        </div>
      ) : (
        <div className="flex-grow grid grid-cols-12">
          <div className="col-span-8 overflow-y-auto bg-blue-100">
            {getLeftComponent(stage)}
          </div>
          <div className="col-span-4 bg-purple-200 h-full">
            {getProgressComponent(stage)}
          </div>
        </div>
      )}
    </div>
  );
}

FoodTruck.auth = true;
