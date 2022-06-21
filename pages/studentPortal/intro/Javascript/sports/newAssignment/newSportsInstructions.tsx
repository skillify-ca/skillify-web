import React from "react";
import ProgressBar from "../../../../../../components/ProgressBar";
import { Button } from "../../../../../../components/ui/Button";

const newSportsAssignmentIntro = ({ lessonComponents }) => {
  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 p-8 space-y-4 text-gray-700 bg-gray-100">
          <h1 className="font-bold">Challenge 0 (warmup)</h1>
          <p>
            Copy the data for NBA players from here
            <a
              className="text-blue"
              href="https://api.sportsdata.io/api/nba/fantasy/json/Players?key=2d5681816c7c4474a99f125654385a8d"
            >
              {" "}
              (link)
            </a>
          </p>

          <p>
            This data represents an array of projected fantasy stats from last
            season. Paste that data into your code, and write a function that
            calculates the average height of all players who play for the
            Raptors
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

export default newSportsAssignmentIntro;
