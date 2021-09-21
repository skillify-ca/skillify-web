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

// set up stage flows

export default function FoodTruck(props) {
  enum STAGE {
    ChooseTruck,
    ChooseFood,
    SelectNumWorkers,
    OverviewOfSelections,
    RevenueEquation,
    ProdCostEquation,
    LaborCostEquation,
    ProfitEquation,
  }

  const [stage, setStage] = useState(STAGE.ChooseTruck);

  const previousStage = () => {
    if (stage > STAGE.ChooseTruck) {
      setStage(stage - 1);
    }
  };

  const nextStage = () => {
    if (stage < STAGE.ProfitEquation) {
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
    } else if (stage == STAGE.OverviewOfSelections) {
      return (
        <OverviewOfSelections
          selectedNumWorkers={selectedNumWorkers}
          setSelectedNumWorkers={setSelectedNumWorkers}
          selectedTruck={truck}
          selectedFood={food}
        />
      );
    } else if (stage == STAGE.RevenueEquation) {
      return (
        <RevenueEquation
          selectedNumWorkers={selectedNumWorkers}
          selectedFood={food}
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
            <p>{revEquationOneBoxThree}</p>
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
            <p>{revEquationOneBoxThree}</p>
            <p>Cost per Plate:</p>
            <p>{food.unitCost}</p>
            <p>Daily Rental Cost:</p>
            <p>{truck.fixedCost}</p>
            <p>Hourly Operating Cost:</p>
            <p>{truck.variableCost}</p>
            <p>Hours Working per Day:</p>
            <p>{operatingHours}</p>
          </div>
          <h1 className="text-4xl mb-8 pt-8">Equation Progress</h1>
          <div className="grid grid-cols-2 text-2xl text-center">
            <p>Total Daily Ingredient Cost:</p>
            <p>{prodCostEquationOneBoxFour}</p>
            <p>Total Daily Truck Cost:</p>
            <p>{prodCostEquationTwoBoxFour}</p>
          </div>
        </div>
      );
    } else if (stage === STAGE.LaborCostEquation) {
      return (
        <div className="flex flex-col p-8">
          <h1 className="text-4xl mb-8">Useful Inputs</h1>
          <div className="grid grid-cols-2 text-2xl text-center">
            <p>Number of Workers:</p>
            <p>{selectedNumWorkers}</p>
            <p>Minumum Hourly Wage:</p>
            <p>{minimumWage}</p>
            <p>Hours Operating per Day:</p>
            <p>{operatingHours}</p>
            <p>Total Daily Ingredient Cost:</p>
            <p>{prodCostEquationOneBoxFour}</p>
            <p>Total Daily Truck Rental Cost:</p>
            <p>{prodCostEquationTwoBoxFour}</p>
          </div>
          <h1 className="text-4xl mb-8 pt-8">Equation Progress</h1>
          <div className="grid grid-cols-2 text-2xl text-center">
            <p>Total Wages per Day</p>
            <p>{laborCostEquationOneBoxFour}</p>
            <p>Total Costs per Day:</p>
            <p>{laborCostEquationTwoBoxFour}</p>
          </div>
        </div>
      );
    } else if (stage === STAGE.ProfitEquation) {
      return (
        <div className="flex flex-col p-8">
          <h1 className="text-4xl mb-8">Useful Inputs</h1>
          <div className="grid grid-cols-2 text-2xl text-center">
            <p>Total Daily Revenue:</p>
            <p>${Number.parseInt(revEquationTwoBoxFour)}</p>
            <p>Total Daily Costs:</p>
            <p>${laborCostEquationTwoBoxFour}</p>
          </div>
          <h1 className="text-4xl mb-8 pt-8">Equation Progress</h1>
          <div className="grid grid-cols-2 text-2xl text-center">
            <p>Total Revenue per Day</p>
            <p>{profitEquationOneBoxOne}</p>
            <p>Total Costs per Day:</p>
            <p>{profitEquationOneBoxTwo}</p>
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
        <div className="w-1/3 border-4 border-black">
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
