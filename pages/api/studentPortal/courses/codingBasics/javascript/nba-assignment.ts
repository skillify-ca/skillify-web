import { NextApiRequest, NextApiResponse } from "next";
import { LessonComponentData } from "../../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../introduction";

export function getJSNBAAssignment(): ResponseData {
  const playerDataURL = `https://api.sportsdata.io/api/nba/fantasy/json/Players?key=${process.env.NEXT_PUBLIC_NBA_DATA_API_KEY}`;

  const fantasyProjectionDataURL = `https://api.sportsdata.io/api/nba/fantasy/json/PlayerSeasonProjectionStats/2022?key=${process.env.NEXT_PUBLIC_NBA_DATA_API_KEY}`;

  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "NBA Assignment",
    },
    {
      component: "description",
      text: "Objective: Write a JavaScript function that takes this Pokemon JSON and returns a list of all Pokemon Names that can learn the move Fire Blast.",
    },
    {
      component: "title",
      text: "Part 1",
    },
    {
      component: "description",
      text: "The following challenges will test your ability to write JavaScript functions that manipulate JSON data to produce insights on NBA data.",
    },
    {
      component: "description",
      text: "For the Warmup challenge, use the following dataset which contains a list of all NBA players.",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Player Data",
          description: "Dataset containing a list of all NBA players.",
          image: "", // Optional, no image provided
          link: playerDataURL,
        },
        {
          title: "NBA Data Playground",
          description: "A coding playground for you to explore NBA data.",
          image:
            "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY285Mmx2ZDVzdmV6eGNqM2l3Ynk4b2Z3ZHh2djJhNjcxbXpudzJlaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KGHTGCsdrPOq3H8QES/giphy.webp",
          link: "nbaDataPlayground",
        },
      ],
    },
    {
      component: "description",
      text: "For challenges 1-4, use the following data which contains last year's fantasy projections for every NBA player.",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Fantasy Projections Data",
          description:
            "Dataset containing fantasy projections for every NBA player.",
          image: "", // Optional, no image provided
          link: fantasyProjectionDataURL,
        },
      ],
    },
    {
      component: "caption",
      text: "Warmup Challenge",
    },
    {
      component: "description",
      text: "Write a function that finds the average height of all players on the Toronto Raptors.",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Warmup Hint",
          description:
            "Sample code for listing players using filter and map methods.",
          image: "/images/nbachallenge/warmUpChallengeExample.png",
          link: "/images/nbachallenge/warmUpChallengeExample.png", // No link provided in the original content
        },
      ],
    },
    {
      component: "caption",
      text: "Challenge One",
    },
    {
      component: "description",
      text: "Write a function that returns the player who was projected to have the most turnovers.",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Challenge One Hint",
          description:
            "Sample code for sorting an array of objects by a property.",
          image: "/images/nbachallenge/sortExample.png",
          link: "/images/nbachallenge/sortExample.png", // No link provided in the original content
        },
      ],
    },
    {
      component: "caption",
      text: "Challenge Two",
    },
    {
      component: "description",
      text: "Write a function that returns the player projected to have the highest three-point field goal percentage, given they will play in at least 50 games.",
    },
    {
      component: "description",
      text: 'Hint: Use the slice method to limit the results: ".slice(0, X)".',
    },
    {
      component: "caption",
      text: "Challenge Three",
    },
    {
      component: "description",
      text: "The assist-to-turnover ratio is a valuable metric for evaluating the efficiency of point guards. Write a function that returns the top 10 point guards by projected assist-to-turnover ratio. Make sure you account for players projected to have zero turnovers, otherwise the ratio will not compute.",
    },
    {
      component: "caption",
      text: "Challenge Four",
    },
    {
      component: "description",
      text: "Player Efficiency Rating (PER) is an advanced metric often used to determine the 'best' player by summing up all their positive accomplishments and subtracting their negative accomplishments.",
    },
    {
      component: "description",
      text: "You can calculate PER using the following formula: Field Goals Made * 85.910 + Steals * 53.897 + Three Points Made * 51.757 + Free Throws Made * 46.845 + Offensive Rebounds * 39.190 + Assists * 34.677 + Defensive Rebounds * 14.707 - Fouls * 17.174 - Free Throws Missed * 20.091 - Field Goals Missed * 39.190 - Turnovers * 53.897 * (1 / Minutes Played).",
    },
    {
      component: "description",
      text: "Write a function that returns the top 10 players projected to have the highest PER. Make sure you only include players projected to play at least one minute.",
    },
  ];
  return {
    lessonComponents,
    currentNode: 0,
    nextNode: 0,
    nextSlug: "js-summary",
  };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = getJSNBAAssignment();

  res.status(200).json(data);
}
