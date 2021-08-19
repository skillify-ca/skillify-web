import { ReactNode } from "react";
import {
  ApartmentTable,
  CityLoftTable,
  SuburbHouseTable,
  FarmHouseTable,
} from "./BuyAHomeTables";

const BuyAHome = ({}) => {
  return (
    <div
      className="grid grid-cols-2 grid-rows-4 
     p-3 max-w-3xl"
    >
      <div className="row-start-1 border-b-8 border-black">
        <h1 className="text-5xl col-span-3 pb-4">Buy a Home</h1>
        <p>
          Your home must be big enough for your family. Two parents can share a
          room, but each child must have his or her own room. You must also pay
          for gas, electricity, and water in your home. Your expenses go in
          section 3 of your recording sheet.
        </p>
      </div>

      <img
        className="col-start-2 col-span-1 border-b-8 border-black pt-6"
        src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/15152/house-home-residence-clipart-md.png"
        alt="House"
      />

      <div className="row-start-2 col-start-2 col-span-1">
        <p className="pt-4 pb-1 text-center text-2xl">Farm House</p>
        <FarmHouseTable />
      </div>

      <div className="row-start-2 col-start-1 col-span-1">
        <img
          className="p-4"
          src="https://www.nicepng.com/png/full/38-385615_clipart-of-a-farm-house-farm-house-clip.png"
          alt="Farm House"
          width="85%"
          height="auto"
        />
      </div>

      <div className="row-start-3 col-start-1 col-span-1">
        <p className="text-center text-2xl pb-1 pt-1">House in the Suburbs</p>
        <SuburbHouseTable />
      </div>

      <div>
        <img
          className="pl-3"
          src="https://t3.ftcdn.net/jpg/01/27/07/32/360_F_127073215_s5f2FWtPSGt6i5kmaScVKB4AuVbjRuM9.jpg"
          alt="House in the Suburb"
        />
      </div>

      <div className="row-start-4 col-start-2 col-span-1">
        <p className="text-center text-2xl pb-1 pt-1">Apartment</p>
        <ApartmentTable />
      </div>

      <div>
        <img
          src="https://www.freepnglogos.com/uploads/building-png/download-building-png-image-pngimg-6.png"
          alt="Apartment"
          width="95%"
          height="auto"
        />
      </div>

      <div className="row-start-5 col-start-1 col-span-1">
        <p className="text-center text-2xl pb-1 pt-1">City Loft</p>
        <CityLoftTable />
      </div>

      <div>
        <img
          src="https://st2.depositphotos.com/4923421/7586/v/450/depositphotos_75865639-stock-illustration-brick-townhouse.jpg"
          alt="City Loft"
        />
      </div>
    </div>
  );
};

export default BuyAHome;
