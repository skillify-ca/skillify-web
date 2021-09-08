import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import googleClassroomImg from "../public/images/assignments/google-classroom.svg";
import { resources } from "./api/resources";
import { MultipleChoice } from "../components/questionTypes/MultipleChoice";
import { GuessData } from "./api/guessData";

export default function djacobs(props) {
  const onSubmit = (guess:GuessData) => {
    console.log(guess)
  }
  return (
    <div className="flex flex-col overflow-auto bg-scroll bg-blue-50">
      <Navbar />
      <div id="FormHeader">
        <p className="text-2xl text-center bg-blue-400">Giza Form</p>
      </div>
      <div id="FormBody">
        <MultipleChoice displayQuestion="What is the angle of this side?" option1={{id:'option1', text:'60'}} option2={{id:'option2', text:'90'}} option3={{id:'option3', text:'120'}} answer="120" submitGuess={onSubmit}/>
      </div>
      <div id="FormEnd">
        
      </div>
    </div>
  );
}
