import { Button } from '../../ui/Button'
import { useState, useEffect } from 'react'


const DiceSection = () => {

  const diceRoll = () => {
    return Math.floor((Math.random()*6) + 1);
  }

  const [roll, setRoll] = useState(0);

  return (
    <div className="flex gap-24 justify-center items-center">

      <div className='border-4 h-40 w-40 rounded-3xl heropattern-dominos-zinc-900 flex flex-col justify-center items-center gap-3'>
        <p className='text-sm'>dice 1</p>
        <p>{roll}</p>
      </div>

      <div className='border-4 h-40 w-40 rounded-3xl heropattern-dominos-zinc-900 flex flex-col justify-center items-center gap-3'>
        <p className='text-sm'>dice 2</p>
        <p>{roll}</p>
      </div>

      <div className='flex flex-col items-center gap-5'>
        <div className='flex justify-center bg-sky-800/30 rounded-md p-7'>
          <p>Your Number:</p>
          <p></p>
        </div>
        <Button label={'Roll Dice'} onClick={() => setRoll(diceRoll)} />
        <Button label={'Game Rules'} size="small" backgroundColor='yellow' />
      </div>

    </div>
  )
}

export default DiceSection