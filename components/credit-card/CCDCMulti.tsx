import React from 'react'
import { multiQuestionData } from './CCDCMultiData'

const CCDCMulti = () => {

  return (
    <div className="flex flex-col p-12 justify-center">
      <h1 className="text-5xl mb-4">Credit Cards & Debit Cards</h1>
      {" "}
      <h2 className="mb-12">Click on your answer</h2>
      <div className="grid md:grid-cols-2">
        {
        multiQuestionData.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 p-4">
            <h3 className="text-purple-300 font-bold">{item.question}</h3>
            <ul className="flex flex-col gap-4">
              {item.options.map((option, index) => (
                <li key={index}>{option.id}{") "}{option.answer}</li>
              ))}
            </ul>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default CCDCMulti
