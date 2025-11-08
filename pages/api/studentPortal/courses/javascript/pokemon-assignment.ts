import { NextApiRequest, NextApiResponse } from "next";
import { LessonComponentData } from "../../../../../components/studentPortal/lessons/LessonComponent";
import { ResponseData } from "../types";

export function getJSPokemonAssignment(): ResponseData {
  const lessonComponents: LessonComponentData[] = [
    {
      component: "title",
      text: "Pokemon Assignment",
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
      component: "caption",
      text: "Step 1:",
    },
    {
      component: "description",
      text: "You must read through the JSON object.",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Fire Blast Move Data",
          description: "Access the Pokémon data for the move Fire Blast.",
          image: "", // Optional, no image provided in the original HTML
          link: "https://pokeapi.co/api/v2/move/fire-blast",
        },
      ],
    },
    {
      component: "description",
      text: "Copy and paste that data into a JSON viewer so you can properly visualize the object you're going to work with.",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "JSON Viewer",
          description: "A tool to visualize and explore JSON data.",
          image: "", // Optional, no image provided in the original HTML
          link: "http://jsonviewer.stack.hu/",
        },
      ],
    },
    {
      component: "description",
      text: "Copy and paste that data again into a new JavaScript file on your computer. Use the Code Runner Visual Studio Extension to run your code. You can use the extension by searching for 'Run Code' inside of your Command Palette (CMD+SHIFT+P or CTRL+SHIFT+P).",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Code Runner Visual Studio Extension",
          description:
            "An extension for running code directly in Visual Studio Code.",
          image: "", // Optional, no image provided in the original HTML
          link: "https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner",
        },
      ],
    },
    {
      component: "caption",
      text: "Step 2:",
    },
    {
      component: "description",
      text: "Now you must find the array of Pokémon that can learn the attack called 'Fire Blast'.",
    },
    {
      component: "caption",
      text: "Step 3:",
    },
    {
      component: "description",
      text: "Using .map, transform the array of Pokémon to only contain the name and not the URL.",
    },
    {
      component: "caption",
      text: "Step 4:",
    },
    {
      component: "description",
      text: "Print out this array of Pokémon names.",
    },
    {
      component: "caption",
      text: "Step 5:",
    },
    {
      component: "description",
      text: "And there you have it! The Pokémon Assignment is complete!",
    },
    {
      component: "title",
      text: "Part 2",
    },
    {
      component: "description",
      text: "In the previous modules, you were introduced to the concept of iterators, which include, .map and .filter. These iterators are actually used in a profesional setting all the time! That means, you must be confortable with using .map and .filter in order to apply them in your future job opprotunities. In this assignment, you will work with big JSON objects and apply iterators to narrow down to specific data.",
    },
    {
      component: "description",
      text: "First and foremost, you must download Node.js to your computer.",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Node.js",
          description:
            "Download Node.js to set up your development environment.",
          image: "", // Optional, no image provided in the original HTML
          link: "https://nodejs.org/en/download/",
        },
      ],
    },
    {
      component: "description",
      text: "Secondly, you install the Code Runner Extension to Visual Studio Code.",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Code Runner Extension",
          description:
            "Install the Code Runner extension for Visual Studio Code.",
          image: "", // Optional, no image provided in the original HTML
          link: "https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner",
        },
      ],
    },
    {
      component: "description",
      text: "After these 2 steps, you should be good to go!",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "JavaScript Tutorial Video",
          description:
            "Watch this YouTube video to learn more about JavaScript concepts.",
          image: "", // Optional, thumbnail could be added if available
          link: "https://www.youtube.com/embed/jSbJuG6Npss",
        },
      ],
    },
    {
      component: "title",
      text: "Part 3",
    },
    {
      component: "description",
      text: "Before you begin the assignment, check in with your coach and make sure that you're ready to start. Fill out this form to track your confidence around different JavaScript concepts and discuss your responses with your coach. You don't need to feel mastery over all concepts, but you should have a basic understanding of each concept before starting the assignment. If you don't feel confident about a certain topic, review that section in Codecademy.",
    },
    {
      component: "resource-list",
      resources: [
        {
          title: "Confidence Check Form",
          description:
            "Form to track your confidence around different JavaScript concepts.",
          image: "", // Optional, no image provided in the original HTML
          link: "https://docs.google.com/forms/d/e/1FAIpQLSc9uMgy9iVG9cXnXiZTl9yGbAfg26LCTXofqLc8BoBY_FBMmQ/viewform?usp=sf_link",
        },
      ],
    },
  ];
  return {
    lessonComponents,
    currentNode: 0,
    nextNode: 0,
    nextSlug: "js-nba-assignment",
  };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = getJSPokemonAssignment();

  res.status(200).json(data);
}
