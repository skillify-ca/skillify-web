import React, { useState } from 'react'
import { getRndInteger } from '../../../pages/api/random';

const createGrid = () => {
    let arr = [];
    do{
        let gridNumber = getRndInteger(4, 25);
        (gridNumber%2===0) ? (
            arr.push({
                id: arr.length,
                gridNumber: gridNumber,
            })
        ) : "" ;
    }while(arr.length<35)

    return arr;
}; 


const GameBoard = () => {
    const [grid, setGrid] = useState(createGrid);

    return (
        <div className="px-28">
            <h2 className='text-xl pb-4'>GameBoard</h2>            
            <div className="grid grid-cols-5 border-t-2 border-l-2 border-t-[#149ECA] border-l-[#149ECA] text-white">
                {grid.map(i => <div className='flex justify-center items-center border-r-2 border-b-2 h-28 border-b-[#149ECA] border-r-[#149ECA] bg-blue-900' 
                    key={i.id}>{i.gridNumber}</div>)}
            </div>
        </div>
    );
}

export default GameBoard