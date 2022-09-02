import React, { useState } from 'react'

const createGrid = () => {
    let arr = [];
    for(let i=1; i<36; i++){
        arr.push({
            id: i,
            gridNumber: i,  //**To be randomized according to GameBoard setup
        })
    }
    return arr;
}; 


const GameBoard = () => {
    const [grid, setGrid] = useState([]);

    return (
        <div className="px-28">
            <h2 className='text-xl pb-4'>GameBoard</h2>            
            <div className="grid grid-cols-5 border-t-2 border-l-2 border-t-blue-600 border-l-blue-600 bg-blue-900 text-white">
                {createGrid().map(i => <div className='flex justify-center items-center border-r-2 border-b-2 h-28 
                        border-b-blue-600 border-r-blue-600 bg-blue-900' key={i.id}>{i.gridNumber}</div>)}
            </div>
        </div>
    );
}

export default GameBoard