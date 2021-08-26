import { ReactNode } from "react";

const BudgetRules = ({ }) => {
  return (
    <div className={`bg-white border-4 border-black`}>
      <div className="grid grid-cols-3 gap-x-20 gap-y-5 align-middle">
        <h1 className="mt-1 bg-black col-span-3 col-start-0 align-middle text-center text-white text-3xl ">
          Rules
        </h1>

        <div className="col-span-3 col-start-0"></div>
        <div className="text-3xl text-right ">Buy a Home:</div>
        <div className="col-span-2 col-start-0">
          {" "}
          Your home must be big enough for your family. Two parents can share a
          room, but each child must have his or her own room. You must also pay
          for gas, electricity, and water in your home.
        </div>
        <div className="text-3xl text-right "> Buy a Car:</div>
        <div className="col-span-2 col-start-0">
          You can choose to buy a new or used car. Each family must have at
          least one car. You may buy a car for each parent if you choose.
          Children may not have a car. All cars must have insurance, and each
          car also must have gasoline.
        </div>
        <div className="text-3xl text-right ">Buy TV and Internet:</div>
        <div className="col-span-2 col-start-0">
          {" "}
          You can purchase TV/Internet service; however, it is NOT required.
        </div>
        <div className="text-3xl text-right ">Buy a Phone:</div>
        <div className="col-span-2 col-start-0">
          All adults must have a phone. It is not necessary for children to have
          phones, but you may buy one for your children if you choose to do so.
        </div>
        <div className="text-3xl text-right ">Buy Groceries:</div>
        <div className="col-span-2 col-start-0">
          {" "}
          Use the chart to determine how much food will cost for each person in
          your family
        </div>
        <div className="text-3xl text-right pb-5"> The Extras:</div>
        <div className="col-span-2 col-start-0">
          Be careful to budget carefully! You might have to pay for something
          unexpectedly!
        </div>
      </div>
    </div>
  );
};
export default BudgetRules;
