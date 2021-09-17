import React, { useState } from "react";
import BuildAFoodTruck from "../components/foodtruck/BuildAFoodTruck";
import ChooseFoodType from "../components/foodtruck/ChooseFoodType";
import ChooseNumWorkers from "../components/foodtruck/ChooseNumWorkers";
import ChooseTruckType from "../components/foodtruck/ChooseTruckType";

import OverviewOfSelections from "../components/foodtruck/OverviewOfSelections";
import {
  hotDog,
  largeTruck,
  mediumTruck,
  minWage,
  smallTruck,
  Truck,
} from "./api/foodtruck/food";
import RevenueEquation from "../components/foodtruck/RevenueEquation";
import ProdCostEquation from "../components/foodtruck/ProdCostEquation";

import { Button } from "../components/ui/Button";

// set up stage flows

export default function FoodTruck(props) {
  enum STAGE {
    ChooseTruck,
    ChooseFood,
    SelectNumWorkers,
    OverviewOfSelections,
    RevenueEquation,
    ProdCostEquation,
  }

  const [stage, setStage] = useState(STAGE.ChooseTruck);

  const previousStage = () => {
    if (stage > STAGE.ChooseTruck) {
      setStage(stage - 1);
    }
  };

  const nextStage = () => {
    if (stage < STAGE.ProdCostEquation) {
      setStage(stage + 1);
    }
  };

  // declare child component variables

  const [userName, setUserName] = useState("");
  const [truckName, setTruckName] = useState("");
  const [truckSlogan, setTruckSlogan] = useState("");
  const [dollarAmount, setDollarAmount] = useState("");
  const [truck, setTruck] = useState(smallTruck);
  const [food, setFood] = useState(hotDog);
  const [selectedNumWorkers, setSelectedNumWorkers] = useState("1");

  // revenue equation one
  const [equationBoxOne, setEquationBoxOne] = useState("");
  const [equationBoxTwo, setEquationBoxTwo] = useState("");
  const [equationBoxThree, setEquationBoxThree] = useState("");

  // revenue equation two
  const [revEquationTwoBoxOne, setRevEquationTwoBoxOne] = useState("");
  const [revEquationTwoBoxTwo, setRevEquationTwoBoxTwo] = useState("");
  const [revEquationTwoBoxThree, setRevEquationTwoBoxThree] = useState("");

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
    } else if (stage == STAGE.OverviewOfSelections) {
      return (
        <OverviewOfSelections
          selectedNumWorkers={selectedNumWorkers}
          setSelectedNumWorkers={setSelectedNumWorkers}
          selectedTruck={truck}
          selectedFood={food}
          minWage={minWage}
        />
      );
    } else if (stage == STAGE.RevenueEquation) {
      return (
        <RevenueEquation
          selectedNumWorkers={selectedNumWorkers}
          selectedFood={food}
          equationBoxOne={equationBoxOne}
          setEquationBoxOne={setEquationBoxOne}
          equationBoxTwo={equationBoxTwo}
          setEquationBoxTwo={setEquationBoxTwo}
          equationBoxThree={equationBoxThree}
          setEquationBoxThree={setEquationBoxThree}
          revEquationTwoBoxOne={revEquationTwoBoxOne}
          setRevEquationTwoBoxOne={setRevEquationTwoBoxOne}
          revEquationTwoBoxTwo={revEquationTwoBoxTwo}
          setRevEquationTwoBoxTwo={setRevEquationTwoBoxTwo}
          revEquationTwoBoxThree={revEquationTwoBoxThree}
          setRevEquationTwoBoxThree={setRevEquationTwoBoxThree}
        />
      );
    } else if (stage == STAGE.ProdCostEquation) {
      return (
        <ProdCostEquation
          selectedFood={food}
          selectedTruck={truck}
          selectedNumWorkers={selectedNumWorkers}
          prodCostEquationOneBoxOne={prodCostEquationOneBoxOne}
          setProdCostEquationOneBoxOne={setProdCostEquationOneBoxOne}
          prodCostEquationOneBoxTwo={prodCostEquationOneBoxTwo}
          setProdCostEquationOneBoxTwo={setProdCostEquationOneBoxTwo}
          prodCostEquationOneBoxThree={prodCostEquationOneBoxThree}
          setProdCostEquationOneBoxThree={setProdCostEquationOneBoxThree}
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
    }
  };

  const getProgressComponent = (stage: STAGE) => {
    if (
      stage == STAGE.ChooseFood ||
      stage == STAGE.ChooseTruck ||
      stage == STAGE.SelectNumWorkers ||
      stage == STAGE.OverviewOfSelections
    ) {
      return (
        <div className="flex flex-col p-8">
          <h1 className="text-4xl mb-12">Progress</h1>
          <div className="grid grid-cols-2 text-2xl text-center">
            <p>Selected Truck:</p>
            <p>{truck.model}</p>
            <p>Selected Food:</p>
            <p>{food.name}</p>
            <p>Number of Workers:</p>
            <p>{selectedNumWorkers}</p>
          </div>
        </div>
      );
    } else if (stage == STAGE.RevenueEquation) {
      return (
        <div className="flex flex-col p-8">
          <h1 className="text-4xl mb-8">Useful Inputs</h1>
          <div className="grid grid-cols-2 text-2xl text-center">
            <p>Number of Workers:</p>
            <p>{selectedNumWorkers}</p>
            <p>Qty Produced per Hour:</p>
            <p>{food.qtyProducedPerWorkerHour}</p>
            <p>Sale Price:</p>
            <p>{food.unitRevenue}</p>
          </div>
          <h1 className="text-4xl mb-8 pt-8">Equation Progress</h1>
          <div className="grid grid-cols-2 text-2xl text-center">
            <p>Plates per Hour:</p>
            <p>{equationBoxThree}</p>
            <p>Revenue per Hour:</p>
            <p>{revEquationTwoBoxThree}</p>
          </div>
        </div>
      );
    } else if (stage == STAGE.ProdCostEquation) {
      return (
        <div className="flex flex-col p-8">
          <h1 className="text-4xl mb-8">Useful Inputs</h1>
          <div className="grid grid-cols-2 text-2xl text-center">
            <p>Plates per Hour:</p>
            <p>{equationBoxThree}</p>
            <p>Cost per Plate:</p>
            <p>{food.unitCost}</p>
            <p>Daily Rental Cost:</p>
            <p>{truck.fixedCost / 30}</p>
            <p>Hourly Operating Cost:</p>
            <p>{truck.variableCost / 6}</p>
            <p>Hours Working per Day:</p>
            <p>6</p>
          </div>
          <h1 className="text-4xl mb-8 pt-8">Equation Progress</h1>
          <div className="grid grid-cols-2 text-2xl text-center">
            <p>Ingredient Cost per Hour:</p>
            <p>{prodCostEquationOneBoxThree}</p>
            <p>Truck Cost per Hour:</p>
            <p>{prodCostEquationTwoBoxFour}</p>
          </div>
          <h1 className="text-4xl mb-8 pt-8">Money per Day</h1>
          <div className="grid grid-cols-2 text-2xl text-center">
            <p>Ingredient Cost per Day:</p>
            <p>{Number.parseInt(prodCostEquationOneBoxThree) * 6}</p>
            <p>Truck Cost per Day:</p>
            <p>{prodCostEquationTwoBoxFour}</p>
            <p>Operating Costs per Day:</p>
            <p>
              {Number.parseInt(prodCostEquationOneBoxThree) * 6 +
                Number.parseInt(prodCostEquationTwoBoxFour)}
            </p>
            <p>Revenue per Day:</p>
            <p>{Number.parseInt(revEquationTwoBoxThree) * 6}</p>
            <p>Profit per Day:</p>
            <p>
              {Number.parseInt(revEquationTwoBoxThree) * 6 -
                (Number.parseInt(prodCostEquationOneBoxThree) * 6 +
                  Number.parseInt(prodCostEquationTwoBoxFour))}
            </p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col p-12">
      <div className="flex justify-evenly border-2 border-bottom border-dashed border-black p-12">
        <img
          className="object-left object-contain h-28"
          src={
            "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/77310/food-truck-clipart-md.png"
          }
        />
        <h1 className="p-8 text-black bold text-6xl">
          Let's Build Your Own Food Truck!!!
        </h1>
        <img
          className="object-right object-contain h-28 invert"
          src={
            "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/77310/food-truck-clipart-md.png"
          }
        />
      </div>
      <div className="flex flex-row">
        <div className="w-2/3">{getLeftComponent(stage)}</div>
        <div className="w-1/3 border-8 border-pink-600">
          {getProgressComponent(stage)}
        </div>
      </div>
      <div className="w-3/4 flex flex-row space-x-8 justify-center p-12">
        <Button
          backgroundColor="pink"
          textColor="white"
          label="Previous"
          onClick={previousStage}
        />

        <Button
          backgroundColor="pink"
          textColor="white"
          label="Next"
          onClick={nextStage}
        />
      </div>
    </div>
  );
}
