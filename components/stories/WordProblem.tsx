import React, { useState } from 'react';

export interface WordProblemProp {
  question: string;
}
const name = ['Lavan', 'Ravi', 'Vithushan', 'Harrishan', 'Yaathavi', 'Hayley', 'John', 'Lee','Bruce', 'Bobby', 'Carlos', 'Tyrone', 'Itachi', 'Bill', 'Mario', 'Yoshi','Tony','Dale','Robert','Howards', 'Donald', 'Sean', 'Babu', 'Lin', 'Jamal', 'Sophia', 'Jeremy', 'Kolly' ]
const nameselctor =() => {
    const random = Math.floor(Math.random() * name.length);
    return name[random]; 
}

/**
 * Primary UI component for user interaction
 */
export const WordProblem: React.FC<WordProblemProp> = ({
  question,
  ...props
}) => {
    const [name, setName] = useState(nameselctor());
    const parse = () => {
        const parts = question.split(" ");
        return {
          first: parts[0],
          second: parts[2],
        };
      };
  return (
      <div>
    <div className="text-2xl flex flex-wrap">
      <p className="align-left">{name} has a chest of coins. Inside, there are
      <span className="text-yellow-500 font-black">{" "+parse().first+ " "}</span>
      gold coins and  
      <span className="text-gray-300 font-black">{" "+parse().second+ " "}</span>
      silver coins. How many coins are in the chest?
      </p>
      </div>
      <div className="text-2xl flex flex-wrap">
           <input type="number" className="appearance-none relative block px-3 py-2 text-center border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 bg-blue-100 focus:z-10 text-sm sm:text-lg w-full"
        placeholder="Enter Answer">
        </input>
    </div>
    <div className= "flex flex-wrap mt-3">
    <img src="/images/gold-coin.png" width="70" height="45" className="mr-2"></img>
    <img src="/images/gold-coin.png" width="70" height="45" className="ml-3 "></img>
    <img src="/images/gold-coin.png" width="70" height="45" className="ml-3 "></img>
    </div>
</div>
  );
};