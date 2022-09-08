import React, { useEffect, useState } from "react";
import {
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import { Button } from "../../../../../components/ui/Button";

const JS11 = ({ lessonComponents }) => {
  const playerDataURL = `https://api.sportsdata.io/api/nba/fantasy/json/Players?key=${process.env.NEXT_PUBLIC_NBA_DATA_API_KEY}`;

  const fantasyProjectionDataURL = `https://api.sportsdata.io/api/nba/fantasy/json/PlayerSeasonProjectionStats/2022?key=${process.env.NEXT_PUBLIC_NBA_DATA_API_KEY}`;

  const [warmUpChallengeVisible, setWarmUpChallengeVisible] = useState(true);
  const [challengeOneVisible, setChallengeOneVisible] = useState(false);
  const [challengeTwoVisible, setChallengeTwoVisible] = useState(false);
  const [challengeThreeVisible, setChallengeThreeVisible] = useState(false);
  const [challengeFourVisible, setChallengeFourVisible] = useState(false);
  const [warmUpHintVisible, setWarmUpHintVisible] = useState(false);
  const [challengeOneHintVisible, setChallengeOneHintVisible] = useState(false);
  const [challengeTwoHintVisible, setChallengeTwoHintVisible] = useState(false);

  return (
    <>
      <div className="col-span-7">
        <div className="grid h-full grid-cols-1 p-8 space-y-4 text-gray-700 bg-gray-100">
          <h1 className="text-2xl font-bold">NBA Data Challenge</h1>
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
              For challenges 1-4, use the following data which contains last
              year's fantasy projections for every NBA player
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
                className="w-5 h-5"
                color="orange"
                onClick={() =>
                  setWarmUpChallengeVisible((prevValue) => !prevValue)
                }
              />
            ) : (
              <ArrowCircleDownIcon
                className="w-5 h-5"
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
                  className="w-5 h-5 ml-2"
                  color={warmUpHintVisible ? "red" : "green"}
                  onClick={() => {
                    setWarmUpHintVisible((prevValue) => !prevValue);
                  }}
                />
              </p>

              {warmUpHintVisible && (
                <p className="p-4 space-y-2 border-4 border-blue-900 border-dashed">
                  Here is sample code that lists all players using the filter
                  and map methods:
                  <img
                    className="p-4"
                    src="/images/nbachallenge/warmUpChallengeExample.png"
                  />
                  parseFloat(value) and parseInt(value) are useful to ensure
                  data is being treated as a number
                </p>
              )}
            </div>
          )}

          <div className="flex flex-row space-x-4">
            <h1 className="font-bold">Challenge One</h1>
            {challengeOneVisible ? (
              <ArrowCircleUpIcon
                className="w-5 h-5"
                color="orange"
                onClick={() =>
                  setChallengeOneVisible((prevValue) => !prevValue)
                }
              />
            ) : (
              <ArrowCircleDownIcon
                className="w-5 h-5"
                color="orange"
                onClick={() =>
                  setChallengeOneVisible((prevValue) => !prevValue)
                }
              />
            )}
          </div>

          {challengeOneVisible && (
            <div className="space-y-4">
              <p className="flex flex-row">
                Write a function that returns the player who was projected to
                have the most turnovers
                <QuestionMarkCircleIcon
                  className="w-5 h-5 ml-2"
                  color={challengeOneHintVisible ? "red" : "green"}
                  onClick={() => {
                    setChallengeOneHintVisible((prevValue) => !prevValue);
                  }}
                />
              </p>
              {challengeOneHintVisible && (
                <p className="p-4 space-y-2 border-4 border-blue-900 border-dashed">
                  Here is sample code that sorts an array of objects in
                  descending order by a property named "rankStatistic":
                  <img
                    className="p-4"
                    src="/images/nbachallenge/sortExample.png"
                  />
                </p>
              )}
            </div>
          )}

          <div className="flex flex-row space-x-4">
            <h1 className="font-bold">Challenge Two</h1>
            {challengeTwoVisible ? (
              <ArrowCircleUpIcon
                className="w-5 h-5"
                color="orange"
                onClick={() =>
                  setChallengeTwoVisible((prevValue) => !prevValue)
                }
              />
            ) : (
              <ArrowCircleDownIcon
                className="w-5 h-5"
                color="orange"
                onClick={() =>
                  setChallengeTwoVisible((prevValue) => !prevValue)
                }
              />
            )}
          </div>

          {challengeTwoVisible && (
            <div className="space-y-4">
              <p>
                Write a function that returns the player projected to have
                highest three point field goal percentage given they will play
                in at least 50 games
                <QuestionMarkCircleIcon
                  className="w-5 h-5 ml-2"
                  color={challengeTwoHintVisible ? "red" : "green"}
                  onClick={() => {
                    setChallengeTwoHintVisible((prevValue) => !prevValue);
                  }}
                />
              </p>
              {challengeTwoHintVisible && (
                <p className="p-4 space-y-2 border-4 border-blue-900 border-dashed">
                  You can use the slice method to only return a set of 0 to X
                  results from an array: ".slice(0, X)"
                </p>
              )}
            </div>
          )}

          <div className="flex flex-row space-x-4">
            <h1 className="font-bold">Challenge Three</h1>
            {challengeThreeVisible ? (
              <ArrowCircleUpIcon
                className="w-5 h-5"
                color="orange"
                onClick={() =>
                  setChallengeThreeVisible((prevValue) => !prevValue)
                }
              />
            ) : (
              <ArrowCircleDownIcon
                className="w-5 h-5"
                color="orange"
                onClick={() =>
                  setChallengeThreeVisible((prevValue) => !prevValue)
                }
              />
            )}
          </div>

          {challengeThreeVisible && (
            <div className="space-y-4">
              <p>
                The assist to turnover ratio is a valuable metric for evaluating
                the efficiency of point guards. Write a function that returns
                the top 10 point guards by projected assist to turnover ratio.
              </p>
              <p>
                Make sure you account for players projected to have zero
                turnovers otherwise the ratio will not compute
              </p>
            </div>
          )}

          <div className="flex flex-row space-x-4">
            <h1 className="font-bold">Challenge Four</h1>
            {challengeFourVisible ? (
              <ArrowCircleUpIcon
                className="w-5 h-5"
                color="orange"
                onClick={() =>
                  setChallengeFourVisible((prevValue) => !prevValue)
                }
              />
            ) : (
              <ArrowCircleDownIcon
                className="w-5 h-5"
                color="orange"
                onClick={() =>
                  setChallengeFourVisible((prevValue) => !prevValue)
                }
              />
            )}
          </div>

          {challengeFourVisible && (
            <div className="space-y-4">
              <p>
                Player Efficiency Rating (PER) is an advanced metric often used
                to determine the "best" player by summing up all their positive
                accomplishments and subtracting their negative accomplishments.
              </p>
              <p>
                You can calculate (PER) using the following formula:
                <ul className="list-disc list-inside">
                  <li>Field Goals Made * 85.910 + </li>
                  <li>Steals * 53.897 +</li>
                  <li>Three Points Made * 51.757 +</li>
                  <li>Free Throws Made * 46.845 + </li>
                  <li>Offensive Rebounds * 39.190 +</li>
                  <li>Assists * 34.677 +</li>
                  <li>Defensive Rebounds * 14.707 -</li>
                  <li>Fouls * 17.174 - </li>
                  <li>Free Throws Missed * 20.091 - </li>
                  <li>Field Goals Missed * 39.190 -</li>
                  <li>Turnovers * 53.897 *</li>
                  <li>(1 / Minutes Played)</li>
                </ul>{" "}
              </p>
              <p>
                Write a function that returns the top 10 players projected to
                have the highest PER. Make sure you only include players
                projected to play at least one minute
              </p>
            </div>
          )}
        </div>
        <div className="flex h-full mt-12 sm:justify-end">
          <a href={"/studentPortal/intro/Javascript/sports/submit-assignment"}>
            <Button label="Continue" disabled={false} />
          </a>
        </div>
      </div>
    </>
  );
};

export default JS11;
