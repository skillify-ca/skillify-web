import React, { useState } from 'react'
import DiceSection from '../../../../components/math/multiplicationConnect/DiceSection';
import GameBoard from '../../../../components/math/multiplicationConnect/GameBoard';
import PlayerSection from '../../../../components/math/multiplicationConnect/PlayerSection';
import { getRandomItemFromArray } from '../../../api/random';

const calculateWinner = () => {
  
}

const createGrid = () => {
  let arr = [];
  let grid = [];
  for (let i = 4; i < 25; i++) {
    (i%2===0) ? arr.push(i) : "";
  }
  for (let i = 0; i < 35; i++) {
    let gridNumber = getRandomItemFromArray(arr);
    grid.push({
      id: i,
      gridNumber: gridNumber,
      isSelected: false,
    });
  }
  return grid;
}; 


const Index = () => {
  //Extract these into App level State to determine Winner here
  const [grid, setGrid] = useState(createGrid);
  // const [block, setBlock] = useState(blockData); //this next

  return (
    <div className='flex flex-col gap-10 max-w-5xl'>
        <h1 className='text-3xl text-center'>Welcome to Multiplication Connect Four 🔴🟡</h1>
        <PlayerSection />
        <DiceSection />
        <GameBoard grid={grid}/>
    </div>
  )
}

export default Index;