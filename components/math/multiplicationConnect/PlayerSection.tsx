import React from 'react'
import { Input } from '../../ui/Input'

const PlayerSection = () => {
  return (
    <div>
        <div className="flex justify-around">
            <input className='placeholder:text-black-500' placeholder='Player 1'></input>
            <input className='placeholder:text-black-500' placeholder='Player 2 (*WIP)'></input>
        </div>
    </div>
  )
}

export default PlayerSection