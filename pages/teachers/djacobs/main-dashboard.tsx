import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import dashboard from "../../../components/dashboard/dashboard";
import dashboard_giza from "../../../components/dashboard/dashboard-giza";

const MainDashboardPage = () => {
  const choices = ["Dashboard", "Giza Dashboard"];
  const [choiceIndex, setChoiceIndex] = useState(0);
  const dashboardComponent = [dashboard, dashboard_giza];
  const consolelog = () => {
    console.log(choiceIndex);
  };
  const chooseDashboard = (i) => {
    console.log(i);
  };
  return (
    <div className="flex flex-col overflow-auto bg-scroll heropattern-architect-blue-200 bg-blue-100 h-screen">
      <Navbar />
      <h1 className="text-center font-bold text-xl p-4">
        {"Dashboard Page for Ms.Jacobs"}
      </h1>
      <h2 className="text-center font-bold text-xl p-4">
        {"Please select an assignment from the dropdown below"}
      </h2>
      <select
        className="border-blue-400 border-2 p-4"
        value={choiceIndex}
        onChange={(e) => setChoiceIndex(Number.parseInt(e.target.value))}
      >
        <option value={0}>{choices[0]}</option>
        <option value={1}>{choices[1]}</option>
      </select>
      {/*
      This will be where the component is going to be called, for some reason I am having issues with calling the component, may need some pair programming on this.
      This will be a part of next PR, for now this sample dashboard page will be the 1st step of creating this dashboard home
      dashboardComponent[choiceIndex]
      */}
    </div>
  );
};

export default MainDashboardPage;

/*
<div id="dashboardDisplay" className="flex flex-col gap-8 p-4">
        {dashboardComponent[choiceIndex]}
      </div>
*/
