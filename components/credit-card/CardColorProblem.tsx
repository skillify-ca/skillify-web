import React from 'react'
import { CardColorProblemData } from './CardColorProblemData'

const CardColorProblem = () => {

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 p-12 gap-4">
      <div>
        <h1 className="text-3xl font-bold uppercase">Credit or Debit</h1>
      </div>
      {
        CardColorProblemData.map((item, index) => (
          <div key={index} className="max-w-96 h-48 bg-grey-200 border-4 rounded-2xl border-green-500">
            <p className="px-4">Scortabonk</p>
            <div className="max-full bg-green-300 h-8 mb-4"></div>
            <p className="px-4">{item.question}</p>
            <span className="flex justify-center text-red-500">{item.answer}</span>
          </div>
        ))


      }


    </div>
  )
}

export default CardColorProblem
