import React from "react";

const FrontEndProject = () => (
  <div className="p-6 bg-white rounded-lg shadow-lg">
    <h2 className="mb-4 text-2xl font-bold">Assignment: Card Gallery</h2>
    <h3 className="mb-2 text-xl font-semibold">Description</h3>
    <p className="mb-4">
      Your task is to build a small React application that displays a gallery of
      trading cards. Users should be able to view card details and filter cards
      by type. The app will make use of PokeAPI to fetch card data.
    </p>
    <h3 className="mb-2 text-xl font-semibold">Features</h3>
    <ul className="pl-5 mb-4 list-disc">
      <li>Display a grid of trading cards with an image, name and type(s).</li>
      <li>
        Clicking on a card will open a modal with more information about the
        card, including its description and stats.
      </li>
      <li>
        A dropdown filter that allows users to view cards by their type (e.g.,
        Fire, Water, Electric).
      </li>
    </ul>
    <h3 className="mb-2 text-xl font-semibold">Project Structure</h3>
    <p className="mb-2">You should have the following components at least:</p>
    <ul className="pl-5 mb-4 list-disc">
      <li>
        <b>App:</b> This is your main component.
      </li>
      <li>
        <b>CardGrid:</b> This is the component that will display the grid of
        cards.
      </li>
      <li>
        <b>Card:</b> This is the individual card component.
      </li>
      <li>
        <b>CardModal:</b> This is the modal that will display more detailed info
        about the card.
      </li>
      <li>
        <b>Filter:</b> This is the component that will allow the user to filter
        cards by type.
      </li>
    </ul>
    <div className="flex flex-col">
      <p className="font-bold">Submission</p>
      <p>
        To submit your assignment you will need to create a GitHub repository
        and share the link with us.
      </p>
    </div>
  </div>
);

export default FrontEndProject;
