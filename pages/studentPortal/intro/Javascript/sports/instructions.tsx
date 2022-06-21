import React, { useEffect, useState } from "react";
import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import { Button } from "../../../../../components/ui/Button";

const JS11 = ({ lessonComponents }) => {
  const playerDataURL =
    "https://api.sportsdata.io/api/nba/fantasy/json/Players?key=2d5681816c7c4474a99f125654385a8d";

  const fantasyProjectionDataURL =
    "https://api.sportsdata.io/api/nba/fantasy/json/PlayerSeasonProjectionStats/2021?key=2d5681816c7c4474a99f125654385a8d";

  const [warmUpChallengeVisible, setWarmUpChallengeVisible] = useState(true);
  const [challengeOneVisible, setChallengeOneVisible] = useState(false);
  const [challengeTwoVisible, setChallengeTwoVisible] = useState(false);
  const [challengeThreeVisible, setChallengeThreeVisible] = useState(false);
  const [challengeFourVisible, setChallengeFourVisible] = useState(false);
  const [challengeFiveVisible, setChallengeFiveVisible] = useState(false);
  const [warmUpHintVisible, setWarmUpHintVisible] = useState(false);

  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 p-8 space-y-4 text-gray-700 bg-gray-100">
          <h1 className="font-bold text-2xl">NBA Data Challenge</h1>
          <p>
            The following challenges will test your ability to write Javascript
            functions that manipulate JSON data to produce insights on NBA data
          </p>
          <ul className="list-disc list-inside">
            <li>
              For the Warmup challenge, use the following dataset which contains
              a list of all NBA players{" "}
              <a className="text-red-500" href={playerDataURL}>
                {" "}
                (link)
              </a>{" "}
            </li>
            <li>
              For challenges 1-5, use the following data which represents an
              array of projected fantasy stats from last season{" "}
              <a href={fantasyProjectionDataURL} className="text-red-500">
                (link){" "}
              </a>
            </li>
            <li>Click on the "?" icon to toggle a hint!</li>
          </ul>

          <div className="flex flex-row space-x-4">
            <h1 className="font-bold">Warmup Challenge</h1>
            {warmUpChallengeVisible ? (
              <ArrowCircleUpIcon
                className="h-5 w-5"
                color="orange"
                onClick={() =>
                  setWarmUpChallengeVisible((prevValue) => !prevValue)
                }
              />
            ) : (
              <ArrowCircleDownIcon
                className="h-5 w-5"
                color="orange"
                onClick={() =>
                  setWarmUpChallengeVisible((prevValue) => !prevValue)
                }
              />
            )}
          </div>

          {warmUpChallengeVisible && (
            <div className="space-y-4">
              <p className="flex flex-row">
                Write a function that finds the average height of all players on
                the Toronto Raptors
                <QuestionMarkCircleIcon
                  className="h-5 w-5 ml-2"
                  color={warmUpHintVisible ? "red" : "green"}
                  onClick={() => {
                    setWarmUpHintVisible((prevValue) => !prevValue);
                  }}
                />
              </p>

              {warmUpHintVisible && (
                <p className="space-y-2 border-4 border-blue-900 p-4 border-dashed">
                  Here is some sample code that lists all players on the Golden
                  State Warriors:
                  <img
                    className="p-4"
                    src="/images/warmUpChallengeExample.png"
                  ></img>
                </p>
              )}
            </div>
          )}

          <p></p>

          <div className="flex flex-row space-x-4">
            <h1 className="font-bold">Challenge One</h1>
            {challengeOneVisible ? (
              <ArrowCircleUpIcon
                className="h-5 w-5"
                color="orange"
                onClick={() =>
                  setChallengeOneVisible((prevValue) => !prevValue)
                }
              />
            ) : (
              <ArrowCircleDownIcon
                className="h-5 w-5"
                color="orange"
                onClick={() =>
                  setChallengeOneVisible((prevValue) => !prevValue)
                }
              />
            )}
          </div>

          {challengeOneVisible && (
            <p>
              Write a function that returns the player name who was projected to
              make the most number of free throws.
            </p>
          )}

          <div className="flex flex-row space-x-4">
            <h1 className="font-bold">Challenge Two</h1>
            {challengeTwoVisible ? (
              <ArrowCircleUpIcon
                className="h-5 w-5"
                color="orange"
                onClick={() =>
                  setChallengeTwoVisible((prevValue) => !prevValue)
                }
              />
            ) : (
              <ArrowCircleDownIcon
                className="h-5 w-5"
                color="orange"
                onClick={() =>
                  setChallengeTwoVisible((prevValue) => !prevValue)
                }
              />
            )}
          </div>

          {challengeTwoVisible && (
            <p>
              Write a function that can take a player from this array, analyze
              their fantasy stats and return a rating from 1 to 100 for that
              player. You have creativity here on how you want to come up with
              that rating but base it off their stats.
            </p>
          )}

          <div className="flex flex-row space-x-4">
            <h1 className="font-bold">Challenge Three</h1>
            {challengeThreeVisible ? (
              <ArrowCircleUpIcon
                className="h-5 w-5"
                color="orange"
                onClick={() =>
                  setChallengeThreeVisible((prevValue) => !prevValue)
                }
              />
            ) : (
              <ArrowCircleDownIcon
                className="h-5 w-5"
                color="orange"
                onClick={() =>
                  setChallengeThreeVisible((prevValue) => !prevValue)
                }
              />
            )}
          </div>

          {challengeThreeVisible && (
            <p>
              Write a function that sorts this array based on your rating
              function and print out the top 10 players. // (hint. use map() to
              add a new rating property to each item in the array, then sort by
              that property)
            </p>
          )}

          <div className="flex flex-row space-x-4">
            <h1 className="font-bold">Challenge Four</h1>
            {challengeFourVisible ? (
              <ArrowCircleUpIcon
                className="h-5 w-5"
                color="orange"
                onClick={() =>
                  setChallengeFourVisible((prevValue) => !prevValue)
                }
              />
            ) : (
              <ArrowCircleDownIcon
                className="h-5 w-5"
                color="orange"
                onClick={() =>
                  setChallengeFourVisible((prevValue) => !prevValue)
                }
              />
            )}
          </div>

          {challengeFourVisible && (
            <p>
              Adapt your rating function to take in a boolean parameter called
              isFreeThrowPunt your rating function should return a different
              rating depending on this parameter being true or false (hint. an
              if statement will be helpful here). Sort the players
            </p>
          )}

          <div className="flex flex-row space-x-4">
            <h1 className="font-bold">Challenge Five</h1>
            {challengeFiveVisible ? (
              <ArrowCircleUpIcon
                className="h-5 w-5"
                color="orange"
                onClick={() =>
                  setChallengeFiveVisible((prevValue) => !prevValue)
                }
              />
            ) : (
              <ArrowCircleDownIcon
                className="h-5 w-5"
                color="orange"
                onClick={() =>
                  setChallengeFiveVisible((prevValue) => !prevValue)
                }
              />
            )}
          </div>
          {challengeFiveVisible && (
            <p>
              Adapt your rating function to support other types of punt
              categories by changing your boolean parameter to a string
              parameter (hint. more if statements would be needed to support
              each type of punt category)
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default JS11;
