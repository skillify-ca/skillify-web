import { ReactNode } from "react";

export interface DanielProps {
  size: "small" | "large";
  word: "live" | "laugh" | "love";
  colour: "red" | "blue";
}

const Daniel = ({ size, word, colour }: DanielProps) => {

  let text;

  if (word==="live") {
    text = "live"
  } else if (word==="laugh"){
    text = "laugh"
  } else {
    text = "love"
  }
  
  return (
    <div
      className={`flex flex-col justify-center space-y-16 items-center p-8 bg-white shadow-md rounded-xl max-w-screen-lg
       ${size === "large" ? "w-96 h-96" : "w-48 h-24"}`}
    >
     <p className={`${colour === "red" ? "text-red-600" : "text-blue-600"}`}>{text}</p>
    </div>
  );
};

export default Daniel;
