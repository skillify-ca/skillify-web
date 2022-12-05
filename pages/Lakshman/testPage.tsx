import React, { FunctionComponent, useState } from "react";
import { Button } from "../../components/ui/Button";
import { gql, useQuery, useLazyQuery } from "@apollo/client";
import { setInput } from "../../redux/evaluateExpressionSlice";

export const FETCH_FOODTRUCK = gql`
  query fetchFoodTruck {
    foodtruck_results {
      badgeId
      createdAt
      id
      profit
      timeTaken
      time_taken
    }
  }
`;

export const INPUT_FOODTRUCK = gql`
  mutation foodTruckMutation {
    insert_foodtruck_results(
      objects: [
        { userId: "iHvoTD4uKzXUQXJ40kcio0wnJR32", badgeId: 22, profit: 77 }
      ]
    ) {
      returning {
        badgeId
      }
    }
  }
`;

// FoodTruckResults type declaration
export type FoodTruckResults = {
  badgeId: string;
  createdAt: string;
  id: string;
  profit: string;
  timeTaken: string;
  time_taken: string;
};

// FoodTruckResultsResponse type declaration
export type FoodTruckResultsResponse = {
  foodtruck_results: Array<FoodTruckResults>;
};

export const testPage: FunctionComponent = ({}) => {
  const [profit, setProfit] = useState(0);

  const [fetchFoodTruckResults, { data }] =
    useLazyQuery<FoodTruckResultsResponse>(FETCH_FOODTRUCK);
  console.log({ data });

  // Create mutation inside this submitGuess function
  const submitProfit = () => {
    const input = document.getElementById("input");
    setInput(input);
    alert({ input });
  };
  return (
    <div className="p-16 space-y-4 grid grid-rows-2 justify-start divide-y-2">
      <div className="grid ">
        <Button
          label={"Query Test"}
          onClick={() => {
            fetchFoodTruckResults();
          }}
        ></Button>
        <p>Display data {JSON.stringify(data)}</p>
        {data &&
          data.foodtruck_results.map((x) => {
            return <div>{x.badgeId}</div>;
          })}
        {/* <p>{jsonData}</p> */}
      </div>
      <div className="grid space-x-4 grid-cols-2 justify-evenly">
        <Button
          label={"Mutation"}
          onClick={() => {
            submitProfit();
          }}
        />
        <input
          type="number"
          id="input"
          placeholder="Enter Profit"
          className="text-sm text-white place-content-center bg-inherit w-24 placeholder:text-inherit text-center"
        />
      </div>
    </div>
  );
};

export default testPage;
