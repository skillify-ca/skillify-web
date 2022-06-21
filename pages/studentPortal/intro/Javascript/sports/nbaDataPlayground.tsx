import React, { useEffect, useState } from "react";
import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import { Button } from "../../../../../components/ui/Button";

const nbaDataPlayground = ({ lessonComponents }) => {
  const playerDataURL =
    "https://api.sportsdata.io/api/nba/fantasy/json/Players?key=2d5681816c7c4474a99f125654385a8d";

  const fantasyProjectionDataURL =
    "https://api.sportsdata.io/api/nba/fantasy/json/PlayerSeasonProjectionStats/2022?key=2d5681816c7c4474a99f125654385a8d";

  const [playerData, setPlayerData] = useState(null);
  const [fantasyProjectionData, setFantasyProjectionData] = useState(null);

  const findTopXbyState = (
    fantasyProjectionData,
    rankStatistic,
    minGames,
    numPlayers
  ) => {
    const topXArray = fantasyProjectionData
      .filter((criteria) => criteria.Games > minGames)
      .sort(
        (a, b) => parseFloat(b[rankStatistic]) - parseFloat(a[rankStatistic])
      )
      .slice(0, numPlayers);

    return topXArray;
  };

  useEffect(() => {
    fetch(playerDataURL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setPlayerData(data);
      });

    fetch(fantasyProjectionDataURL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((fantasyData) => {
        setFantasyProjectionData(fantasyData);
      });
  }, []);

  return (
    <>
      <div className="col-span-7">
        <div className="grid place-items-center h-full grid-cols-1 p-8 space-y-20 text-gray-700 bg-gray-100">
          <h1 className="text-center text-4xl">
            Playground for testing out NBA data functions
          </h1>
          <iframe
            src="https://giphy.com/embed/KGHTGCsdrPOq3H8QES"
            width="200"
            height="200"
            frameBorder="0"
            className="items-center"
          />
          <div>
            <p className="font-bold">List of Players on the Warriors</p>
            {playerData &&
              playerData
                .filter((player) => player.Team === "GS")
                .map((it) => {
                  return it.FirstName + " " + it.LastName + ", ";
                })}
          </div>
          <div>
            <p className="font-bold">Players with Most Turnovers </p>
            {fantasyProjectionData &&
              findTopXbyState(fantasyProjectionData, "Turnovers", 25, 10).map(
                (it) => {
                  return (
                    <div
                      className="flex flex-row space-x-2 justify-evenly"
                      key={it}
                    >
                      <p>{it.Name}</p> <p>{it.Turnovers}</p>{" "}
                    </div>
                  );
                }
              )}
          </div>
          <div>
            <p className="font-bold">Players with Most 3pt FG </p>
            {fantasyProjectionData &&
              findTopXbyState(
                fantasyProjectionData,
                "ThreePointersMade",
                25,
                10
              ).map((it) => {
                return (
                  <div
                    className="flex flex-row space-x-2 justify-evenly"
                    key={it}
                  >
                    <p>{it.Name}</p> <p>{it.ThreePointersMade}</p>
                    <p>{parseFloat(it.ThreePointersPercentage)}%</p>{" "}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default nbaDataPlayground;
