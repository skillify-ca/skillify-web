import React, { useEffect, useState } from "react";
import ProgressBar from "../../../../../components/coding/studentPortal/ProgressBar";
import { Button } from "../../../../../components/ui/Button";

const JS11 = ({ lessonComponents }) => {
  const playerDataURL =
    "https://api.sportsdata.io/api/nba/fantasy/json/Players?key=2d5681816c7c4474a99f125654385a8d";

  const [playerData, setPlayerData] = useState(null);

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
  }, []);

  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 p-8 space-y-4 text-gray-700 bg-gray-100">
          <h1 className="font-bold text-2xl">NBA Data Challenge</h1>
          <p>
            The following challenges will test your ability to write javascript
            functions that manipulate JSON data to produce insights on NBA data
          </p>

          <h1 className="font-bold">Warmup Challenge</h1>
          <p>
            The following dataset contains a list of all NBA players
            <a className="text-red-500" href={playerDataURL}>
              {" "}
              (link)
            </a>
          </p>

          <p>
            Using the .map() and .filter() methods, display a list of all
            players on the Toronto Raptors.
          </p>
          <p className="space-y-2">
            For example, here is a list of a few players from the Golden State
            Warriors:
            {playerData
              .filter((player) => player.Team === "GS")
              .slice(0, 5)
              .map((it) => {
                return (
                  <p className="ml-5">{it.FirstName + " " + it.LastName}</p>
                );
              })}
          </p>

          <h1 className="font-bold">Challenge 1 </h1>
          <p>
            Write a function that returns the player name who was projected to
            make the most number of free throws.
          </p>
          <h1 className="font-bold">Challenge 2 </h1>
          <p>
            Write a function that can take a player from this array, analyze
            their fantasy stats and return a rating from 1 to 100 for that
            player. You have creativity here on how you want to come up with
            that rating but base it off their stats.
          </p>
          <h1 className="font-bold">Challenge 3 </h1>
          <p>
            Write a function that sorts this array based on your rating function
            and print out the top 10 players. // (hint. use map() to add a new
            rating property to each item in the array, then sort by that
            property)
          </p>
          <h1 className="font-bold">Challenge 4 </h1>
          <p>
            Adapt your rating function to take in a boolean parameter called
            isFreeThrowPunt your rating function should return a different
            rating depending on this parameter being true or false (hint. an if
            statement will be helpful here). Sort the players
          </p>
          <h1 className="font-bold">Challenge 5 </h1>
          <p>
            Adapt your rating function to support other types of punt categories
            by changing your boolean parameter to a string parameter (hint. more
            if statements would be needed to support each type of punt category)
          </p>
        </div>
      </div>
    </>
  );
};

export default JS11;
