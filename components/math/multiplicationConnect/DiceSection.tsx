import React from 'react'
import { Button } from '../../ui/Button'
import { useState } from 'react'
import DiceDots from '../dots/DiceDots'




const DiceSection = () => {
  const diceRoll = () => {
    console.log ( Math.floor((Math.random()*6) + 1));
    return Math.floor((Math.random()*6) + 1);
  }

  return (
    <div>
        <div className="flex gap-24 items-center">
          <div className='border-4 h-40 w-40 grid place-items-center'>
            <p className='text-sm'>dice 1</p>
            <p>{diceRoll}</p>
          </div>
          <div className='border-4 h-40 w-40 grid place-items-center'>
            <p className='text-sm'>dice 2</p>
            <p>{diceRoll}</p>
          </div>
          <Button label={'Roll Dice'} onClick={diceRoll} />
        </div>
    </div>
  )
}

export default DiceSection