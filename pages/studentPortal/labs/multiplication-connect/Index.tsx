import React, { useState } from 'react'
import DiceSection from '../../../../components/math/multiplicationConnect/DiceSection';
import GameBoard from '../../../../components/math/multiplicationConnect/GameBoard';
import PlayerSection from '../../../../components/math/multiplicationConnect/PlayerSection';
import { getRandomItemFromArray } from '../../../api/random';

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

export const calculateWinner = (grid) => {
  // on block press run calculateWinner algo

  /* might be able to use .filter() to break down the grid into rows, verticals, diagonals
    connect four logic: https://stackoverflow.com/questions/32770321/connect-4-check-for-a-win-algorithm 
  */

  // refactor the checks
  // (subtract 3 bc 4 in a row can't be formed afterward)
  // height === width for this example

/*       // horizontalCheck 
      for (int j = 0; j<getHeight()-3 ; j++ ){
        for (int i = 0; i<getWidth(); i++){
            if (this.board[i][j] == player && this.board[i][j+1] == player && this.board[i][j+2] == player && this.board[i][j+3] == player)
                return true;
        }
      } */

/*       // verticalCheck
      for (int i = 0; i<getWidth()-3 ; i++ ){
        for (int j = 0; j<this.getHeight(); j++){
            if (this.board[i][j] == player && this.board[i+1][j] == player && this.board[i+2][j] == player && this.board[i+3][j] == player){
                return true;
            }           
        }
      } */

/*       // ascendingDiagonalCheck 
      for (int i=3; i<getWidth(); i++){
        for (int j=0; j<getHeight()-3; j++){
            if (this.board[i][j] == player && this.board[i-1][j+1] == player && this.board[i-2][j+2] == player && this.board[i-3][j+3] == player)
                return true;
        }
      } */

/*       // descendingDiagonalCheck
      for (int i=3; i<getWidth(); i++){
        for (int j=3; j<getHeight(); j++){
            if (this.board[i][j] == player && this.board[i-1][j-1] == player && this.board[i-2][j-2] == player && this.board[i-3][j-3] == player)
                return true;
        }
      } */


  let rows = [grid.filter((i) => (i.id >= 0 && i.id < 5)), 
              grid.filter((i) => (i.id >= 5 && i.id < 10)),
              grid.filter((i) => (i.id >= 10 && i.id < 15)),
              grid.filter((i) => (i.id >= 15 && i.id < 20)),
              grid.filter((i) => (i.id >= 20 && i.id < 25)), 
              grid.filter((i) => (i.id >= 25 && i.id < 30)), 
              grid.filter((i) => (i.id >= 30 && i.id < 35))];

  for(let i=0; i<rows.length; i++){
    // rows.length == board height == 7
    // rows[i].length == board width == 5

    for(let index=0; index<(rows[i].length-3); index++){
      // Horizontal check
      (rows[i][index].isSelected && rows[i][index+1].isSelected && rows[i][index+2].isSelected && rows[i][index+3].isSelected) ? 
        console.log("(horizontal) Four in a row!") : "";
    }

    if(i<rows.length-3){
      // Vertical check
      for(let index=0; index<rows[i].length; index++){
        (rows[i][index].isSelected && rows[i+1][index].isSelected && rows[i+2][index].isSelected && rows[i+3][index].isSelected) ? 
          console.log("(vertical) Four in a row!") : "";
      }
    }

    if(i>=3){
      // Ascending diagonal check
      for(let index=0; index<rows[i].length-3; index++){
        (rows[i][index].isSelected && rows[i-1][index+1].isSelected && rows[i-2][index+2].isSelected && rows[i-3][index+3].isSelected) ?
          console.log("(ascending diagonal) Four in a row!") : "";
      }

      // Descending diagonal check
      for(let index=3; index<rows[i].length; index++){
        (rows[i][index].isSelected && rows[i-1][index-1].isSelected && rows[i-2][index-2].isSelected && rows[i-3][index-3].isSelected) ?
          console.log("(descending diagonal) Four in a row!") : "";
      }
    }
  }
}

const Index = () => {
  //Extractd to App level State to determine Winner here
  const [grid, setGrid] = useState(createGrid);

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