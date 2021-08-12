export interface BuyANewCarData {
  Make: string;
  Model: string;
  Doors: number;
  Cost: number;
}

export const BuyANewCarTable: BuyANewCarData[] = [
  {
    Make: "Chevrolet",
    Model: "Camaro",
    Doors: 2,
    Cost: 376,
  },

  {
    Make: "Chevrolet",
    Model: "Corvette",
    Doors: 2,
    Cost: 893,
  },

  {
    Make: "Dodge",
    Model: "Ram Truck",
    Doors: 4,
    Cost: 780,
  },

  {
    Make: "Dodge",
    Model: "Charger",
    Doors: 4,
    Cost: 717,
  },

  {
    Make: "Ford",
    Model: "F150",
    Doors: 4,
    Cost: 692,
  },

  {
    Make: "Ford",
    Model: "Expedition",
    Doors: 4,
    Cost: 812,
  },

  {
    Make: "Ford",
    Model: "Focus",
    Doors: 4,
    Cost: 233,
  },

  {
    Make: "Honda",
    Model: "Accord",
    Doors: 4,
    Cost: 573,
  },

  {
    Make: "Honda",
    Model: "Pilot",
    Doors: 4,
    Cost: 608,
  },

  {
    Make: "Honda",
    Model: "Civic",
    Doors: 4,
    Cost: 392,
  },

  {
    Make: "Jeep",
    Model: "Wrangler",
    Doors: 2,
    Cost: 385,
  },

  {
    Make: "Lamborghihni",
    Model: "Gallardo",
    Doors: 4,
    Cost: 3300,
  },

  {
    Make: "Rolls Royce",
    Model: "Ghost",
    Doors: 4,
    Cost: 5040,
  },

  {
    Make: "Toyota",
    Model: "Camry",
    Doors: 4,
    Cost: 415,
  },

  {
    Make: "Toyota",
    Model: "4 Runner",
    Doors: 4,
    Cost: 710,
  },

  {
    Make: "Voltswagen",
    Model: "Jetta",
    Doors: 4,
    Cost: 490,
  },
];

/*<table className={"table-fixed w-full border-collapse"}>
      <thead>
        <tr>
          <th className={"w-1/4 border border-black bg-gray-200"}>Make</th>
          <th className={"w-1/4 border border-black bg-gray-200"}>Model</th>
          <th className={"w-1/4 border border-black bg-gray-200"}>
            {" "}
            2-door/4-door
          </th>
          <th className={"w-1/4 border border-black bg-gray-200"}>
            Cost per Month
          </th>
        </tr>
      </thead>
      <tbody>
        {NewCar.map(() => (
          <tr>
            <td>{Make[0]}</td>
            <td>{Model[0]}</td>
            <td>{Doors[0]}</td>
            <td>{Cost[0]}</td>
          </tr>
        ))}
      </tbody>
    </table>*/
