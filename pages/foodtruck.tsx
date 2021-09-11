import React, { useState } from "react";
import BuildAFoodTruck from "../components/foodtruck/BuildAFoodTruck";
import ChooseFoodType from "../components/foodtruck/ChooseFoodType";
import ChooseNumWorkers from "../components/foodtruck/ChooseNumWorkers";
import ChooseTruckType from "../components/foodtruck/ChooseTruckType";
import FoodReferenceTable from "../components/foodtruck/FoodReferenceTable";
import TruckReferenceTable from "../components/foodtruck/TruckReferenceTable";
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

export default function FoodTruck(props) {
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
  return (
    <div>
      <div className="flex flex-cols-3 border-2 border-bottom border-dashed border-black p-12">
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

      <div className="grid grid-cols-2 p-4">
        <div className="flex items-center">
          <p className="col-span-3 text-black text-2xl">
            You have been saving money for several years in hopes of starting
            your very own food truck. Let's walk through all the things you'll
            need to start your new food truck business and see whether you have
            saved enough money!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <BuildAFoodTruck
          userName={userName}
          setUserName={setUserName}
          truckName={truckName}
          setTruckName={setTruckName}
          truckSlogan={truckSlogan}
          setTruckSlogan={setTruckSlogan}
          dollarAmount={dollarAmount}
          setDollarAmount={setDollarAmount}
        />

        <ChooseTruckType truck={truck} setTruck={onSelectedTruckChanged} />
        <ChooseFoodType
          selectedFood={food}
          setSelectedFood={setFood}
          selectedTruck={truck}
        />
        <ChooseNumWorkers
          selectedNumWorkers={selectedNumWorkers}
          setSelectedNumWorkers={setSelectedNumWorkers}
        />
        <div className="p-16">
          <TruckReferenceTable />{" "}
        </div>
        <div className="p-16">
          <FoodReferenceTable />
        </div>
        <div className="p-16">
          <OverviewOfSelections
            selectedNumWorkers={selectedNumWorkers}
            setSelectedNumWorkers={setSelectedNumWorkers}
            selectedTruck={truck}
            selectedFood={food}
            minWage={minWage}
          />
        </div>
        <div className="p-16">
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
        </div>
        <div className="p-16">
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
        </div>
      </div>
    </div>
  );
}
