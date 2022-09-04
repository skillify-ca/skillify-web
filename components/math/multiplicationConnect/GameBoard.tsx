import React, { useState } from 'react'
import { getRandomItemFromArray, getRndInteger } from '../../../pages/api/random';
import GameBoardBlock from './GameBoardBlock';

const createGrid = () => {
    let arr = [];
    let grid = [];

    for(let i=4; i<25; i++){
        (i%2===0) ? arr.push(i) : "";
    }

    for(let i=0; i<35; i++){
        let gridNumber = getRandomItemFromArray(arr);
        grid.push({
            id: i,
            gridNumber: gridNumber,
        });
    }

    return grid;
}; 

const GameBoard = () => {
    const [grid, setGrid] = useState(createGrid);
    const [block, setBlock] = useState();

    return (
        <div className="px-28 pb-8">
            <h2 className='text-xl pb-4'>GameBoard</h2>            
            <div className="grid grid-cols-5 border-t-2 border-l-2 border-t-[#149ECA] border-l-[#149ECA] text-white text-2xl">
                {grid.map(i => 
                    <div className='flex justify-center items-center border-r-2 border-b-2 h-28 border-b-[#149ECA] border-r-[#149ECA] bg-blue-900' >
                        <GameBoardBlock key={i.id} block={i} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default GameBoard