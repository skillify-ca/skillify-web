import { Button } from '../../ui/Button'
import { useState, useEffect } from 'react'


const DiceSection = () => {

  const diceRoll = () => {
    return Math.floor((Math.random()*6) + 1);
  }

  const [roll, setRoll] = useState(0);

  return (
    <div className="flex gap-24 justify-center items-center">

      <div className='border-4 h-40 w-40 flex flex-col justify-center items-center gap-3'>
        <p className='text-sm'>dice 1</p>
        <p>{roll}</p>
      </div>

      <div className='border-4 h-40 w-40 flex flex-col justify-center items-center gap-3'>
        <p className='text-sm'>dice 2</p>
        <p>{roll}</p>
      </div>

      <Button label={'Roll Dice'} onClick={() => setRoll(diceRoll)} />

    </div>
  )
}

export default DiceSection