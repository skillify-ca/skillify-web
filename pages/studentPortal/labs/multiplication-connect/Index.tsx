import React from 'react'
import DiceSection from '../../../../components/math/multiplicationConnect/DiceSection';
import GameBoard from '../../../../components/math/multiplicationConnect/GameBoard';
import PlayerSection from '../../../../components/math/multiplicationConnect/PlayerSection';


const index = () => {
  return (
    <div className='flex flex-col gap-10'>
        <h1 className='text-3xl text-center'>Welcome to Multiplication Connect Four</h1>
        <PlayerSection />
        <DiceSection />
        <GameBoard />
    </div>
  )
}

export default index;