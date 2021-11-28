import React, { useState } from "react"

interface FinanceMultipleChoiceProps {
    question:string;
    options: string[];
    img?: string;
} 

export const FinanceMultipleChoice = ({ question, options, img}: FinanceMultipleChoiceProps) => {

    const [ active, setActive ] = useState(false)

    const buttonHandler = (e) => {
            setActive(!active)
            console.log(e.target.value)
    }

    return (
        <div className="px-12 mb-12">
            <div className="flex text-center mb-12">
                <img className="md: mr-4 hidden md:block w-12" src="../../images/credit-card/exclamation-mark.svg"></img>
                <span className="text-3xl text-purple-800 font-bold">{question}</span>
            </div>
            <ul className="px-12">
                {options.map(option => 
                    <li 
                        className={`${active ? "font-extrabold" : "font-normal"} list-decimal text-2xl mb-12`}
                        onClick={buttonHandler}
                        value={option}>
                        {option}
                    </li>
                )}
            </ul>

        </div>
    )
}