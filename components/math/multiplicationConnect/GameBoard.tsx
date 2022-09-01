import React from 'react'


const createGrid = () => {
    let arr = [];
    for(let i=1; i<36; i++){
        arr.push({
            key: i,
            gridNumber: i,  //**To be randomized according to GameBoard setup
        })
    }
    const gridItems = arr.map(i => 
        <div className='flex justify-center items-center border-r-2 border-b-2 h-28 border-b-blue-600 border-r-blue-600 bg-blue-900'>{i.gridNumber}</div>
    );
    
    console.log(gridItems);
    return <div className="grid grid-cols-5 border-t-2 border-l-2 border-t-blue-600 border-l-blue-600 bg-blue-900 text-white">{gridItems}</div>;
}; 


const GameBoard = () => {
    return (
        <div className="px-28">
            <h2 className='text-xl pb-4'>GameBoard</h2>
            {createGrid()}
        </div>
    );
}

export default GameBoard