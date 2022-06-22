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
      .slice(0, 5);

    return topXArray;
  };

  const topPlayerEfficiency = (fantasyProjectionData) => {
    const perDataSet = fantasyProjectionData
      .filter((criteria) => criteria.Minutes > 0)
      .map((player) => {
        return {
          name: player.Name,
          PER:
            (parseFloat(player.FieldGoalsMade) * 85.91 +
              parseFloat(player.Steals) * 53.897 +
              parseFloat(player.ThreePointersMade) * 51.757 +
              parseFloat(player.FreeThrowsMade) * 46.845 +
              parseFloat(player.OffensiveRebounds) * 39.19 +
              parseFloat(player.Assists) * 34.677 +
              parseFloat(player.DefensiveRebounds) * 14.707 -
              parseFloat(player.PersonalFouls) * 17.174 -
              (parseFloat(player.FreeThrowsAttempted) -
                parseFloat(player.FreeThrowsMade)) *
                20.091 -
              (parseFloat(player.FieldGoalsAttempted) -
                parseFloat(player.FieldGoalsMade)) *
                39.19 -
              parseFloat(player.Turnovers) * 53.897) *
            (1 / parseFloat(player.Minutes)),
        };
      });

    const topPerArray = perDataSet.sort((a, b) => b.PER - a.PER).slice(0, 10);

    return topPerArray;
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
          <div>
            <p className="font-bold">Players with Highest PER </p>
            {fantasyProjectionData &&
              topPlayerEfficiency(fantasyProjectionData).map((it) => {
                return (
                  <div
                    className="flex flex-row space-x-2 justify-evenly"
                    key={it}
                  >
                    <p>{it.name}</p> <p>{it.PER}</p>
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
