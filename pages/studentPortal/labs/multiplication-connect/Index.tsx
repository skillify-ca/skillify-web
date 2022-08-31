// http://localhost:3000/studentPortal/labs/multiplication-connect/Index

import React from 'react'
import DiceSection from '../../../../components/math/multiplicationConnect/DiceSection';
import PlayerSection from '../../../../components/math/multiplicationConnect/PlayerSection';


const index = () => {
  return (
    <div className='flex flex-col gap-10'>
        <h1 className='text-3xl text-center'>Welcome to Multiplication Connect Four</h1>
        <PlayerSection />
        <DiceSection />

    </div>
  )
}

export default index;