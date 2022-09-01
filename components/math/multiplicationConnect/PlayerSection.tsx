import React from 'react'
import { Input } from '../../ui/Input'

const PlayerSection = () => {
  return (
    <div>
        <div className="flex justify-center gap-24">
            <input className='bg-inherit placeholder:text-inherit' placeholder='Player 1'></input>
            <input className='bg-inherit placeholder:text-inherit' placeholder='Player 2 (*WIP)'></input>
            <p className='text-xs'>👈🏼 Click to rename</p>
        </div>
    </div>
  )
}

export default PlayerSection