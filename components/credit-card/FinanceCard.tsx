import React, { useState } from 'react'

export interface FinanceCardProps {
    question: string,
    answer: string,
}

const FinanceCard = ({question, answer}: FinanceCardProps) => {
    const [color, setColor ] = useState("bg-gray-300")
    const [borderColor, setBorderColor ] = useState("border-gray-500")
    const [cardTitle, setcardTitle ] = useState("Click to Change")
    
    const onColorChangeRequested = () => {
        if (color == "bg-gray-300") {
            setColor("bg-green-300")
            setBorderColor("border-green-500")
            setcardTitle("debit")

        } else if (color == "bg-green-300") {
            setColor("bg-purple-300");
            setBorderColor("border-purple-500")
            setcardTitle("credit")

        } else if (color == "bg-purple-300") {
            setColor("bg-yellow-300")
            setBorderColor("border-yellow-500")
            setcardTitle("both")

        } else if (color == "bg-yellow-300") {
            setColor("bg-green-300")
            setBorderColor("border-green-500")
            setcardTitle("debit")
        }
    }

    return (
        <div 
            onClick={onColorChangeRequested}
            className={`max-w-96 h-48 bg-grey-200 border-4 rounded-2xl ${borderColor}`}>
          <p className="px-4">{cardTitle.toUpperCase()}</p>
          <div className={`max-full ${color} h-8 mb-4`}></div>
          <p className="px-4">{question}</p>
          <span className="flex justify-center text-red-500">{answer}</span>
        </div>
    )
}

export default FinanceCard
