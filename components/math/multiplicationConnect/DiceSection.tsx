import React from 'react'
import { Button } from '../../ui/Button'
import DiceDots from '../dots/DiceDots'

const DiceSection = () => {
  return (
    <div>
      
        <div className="flex gap-24 items-center">
          <div className='border-4 h-40 w-40 grid place-items-center'>
            Dice 1
          </div>
          <div className='border-4 h-40 w-40 grid place-items-center'>
            Dice 2
          </div>
          <Button label={'Roll Dice'}/>
        </div>


        {/* <div className='inline-flex p-5 border-4 border-black-500'>
            // Using existing dice component
            <DiceDots value={6} />
        </div> */}
    </div>
    
  )
}

export default DiceSection