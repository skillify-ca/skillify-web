import React from "react";

const GameDevProject = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Game Development Starter Project</h2>
      <p className="text-gray-800">
        This project is designed to introduce beginners to game development by creating a simple 2D game. You'll learn the fundamentals of game development while using free resources and tools.
      </p>
      <p className="text-gray-800 mt-2">
        Follow the objectives and requirements below to complete the project in 2-4 weeks, depending on your pace.
      </p>
      <h3 className="text-xl font-bold mt-4">Project Objectives:</h3>
      <ul className="list-disc list-inside text-gray-800 pl-4">
        <li>Understand the basics of game development concepts like sprites, animations, and game loops.</li>
        <li>Create a simple 2D game (e.g., a platformer, top-down shooter, or puzzle game).</li>
        <li>Learn to use a free game engine like <a href="https://godotengine.org/" target="_blank" rel="noreferrer" className="text-blue-500">Godot</a>, <a href="https://unity.com/" target="_blank" rel="noreferrer" className="text-blue-500">Unity</a> (free tier), or <a href="https://www.unrealengine.com/" target="_blank" rel="noreferrer" className="text-blue-500">Unreal Engine</a>.</li>
        <li>Incorporate user interactions like keyboard or mouse controls.</li>
        <li>Build a game with basic levels, a score system, and end conditions.</li>
        <li>Focus on game design principles such as balance and player engagement.</li>
      </ul>
      <h3 className="text-xl font-bold mt-4">Requirements:</h3>
      <ul className="list-disc list-inside text-gray-800 pl-4">
        <li>Install a game engine of your choice (e.g., Godot, Unity, Unreal Engine).</li>
        <li>Learn the basics of a programming language used in game engines (e.g., C# for Unity, GDScript for Godot).</li>
        <li>Access free assets from platforms like <a href="https://opengameart.org/" target="_blank" rel="noreferrer" className="text-blue-500">OpenGameArt</a> or <a href="https://kenney.nl/assets" target="_blank" rel="noreferrer" className="text-blue-500">Kenney Assets</a>.</li>
        <li>Understand game physics and collision detection.</li>
        <li>Follow beginner tutorials available on <a href="https://roadmap.sh/game-developer" target="_blank" rel="noreferrer" className="text-blue-500">roadmap.sh</a> or YouTube channels like <a href="https://www.youtube.com/@Brackeys" target="_blank" rel="noreferrer" className="text-blue-500">Brackeys</a>.</li>
      </ul>
      <h3 className="text-xl font-bold mt-4">Recommended Steps:</h3>
      <ol className="list-decimal list-inside text-gray-800 pl-4">
        <li>Set up your game development environment (install the engine, configure your editor).</li>
        <li>Follow a "Hello World" tutorial to understand the basics of your chosen engine.</li>
        <li>Plan your game mechanics and draw a simple wireframe or flowchart.</li>
        <li>Develop the game incrementally:
          <ul className="list-disc list-inside ml-6">
            <li>Create a player character with basic movement.</li>
            <li>Add game elements like enemies, collectibles, or obstacles.</li>
            <li>Design and implement one or more levels.</li>
            <li>Incorporate sound effects and background music using free resources from <a href="https://freesound.org/" target="_blank" rel="noreferrer" className="text-blue-500">Freesound</a>.</li>
          </ul>
        </li>
        <li>Test your game thoroughly and refine the mechanics for better playability.</li>
        <li>Export and share your game as a standalone executable or a web-based game using tools like <a href="https://itch.io/" target="_blank" rel="noreferrer" className="text-blue-500">Itch.io</a>.</li>
      </ol>
      <div className="mt-6">
        <h3 className="text-xl font-bold">Submission</h3>
        <p className="text-gray-800 mt-2">
          To submit your assignment, create a GitHub repository and share the link. Ensure your repository includes:
        </p>
        <ul className="list-disc list-inside text-gray-800 pl-4">
          <li>All necessary project files, assets, and documentation.</li>
          <li>A README file with instructions on how to play or run the game.</li>
          <li>Optionally, a brief description of your development process and challenges faced.</li>
        </ul>
      </div>
    </div>
  );
};

export default GameDevProject;
