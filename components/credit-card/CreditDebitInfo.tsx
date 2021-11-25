import React from 'react'
import { wordBankData } from './CreditDebitInfoData';

export interface CreditDebitInfoProps {

}

export interface DropDownMenuProps {
    word: string,
    answer: string,
}

export const DropDownMenu = ({word, answer}: DropDownMenuProps) => {
    return (
        <div className="inline-block">
            <select>
                <option value="" placeholder="Select">Select</option>
                <option>{word}</option>
                <option>{answer}</option>
            </select>
        </div>
    )
}

const CreditDebitInfo = () => {

    return (
        <div className="flex flex-col p-12">
            <div className="mb-12 flex justify-center">
                <h1 className="font-extrabold text-6xl uppercase -pl-12">
                    <span className="text-purple-500">Credit</span>
                     {" "}vs{" "}
                    <span className="text-green-500">Debit</span>
                </h1>
            </div>
    
            <div className="mb-12">
                <div className="mb-4 flex justify-center">
                    <h2 className="text-2xl">What's the difference?</h2>
                </div>
            
                <div className="grid grid-cols-2 gap-11">
                    <div className="w-full bg-purple-200 p-4">
                        <h2 className="text-xl mb-1">Credit Cards</h2>
                        <div>
                            Allow consumers to <DropDownMenu word="lend" answer="borrow"/> money from a financial institution and <DropDownMenu word="earn" answer="pay"/> it back later
                        </div>
                    </div>
                    <div className="w-full bg-green-200 p-4">
                        <h2 className="text-xl mb-1">Debit Cards</h2>
                        <div>
                            Allow consumers to <DropDownMenu word="save" answer="spend"/> money they have <DropDownMenu word="withdrawed" answer="deposited"/> in their bank account
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2">
                <h2 className="text-2xl mb-4">How are they the same?</h2>
                <div className=" bg-gray-200 p-4">
                    <ul className="flex flex-col gap-4">
                        <li>Allow a person to make <DropDownMenu word="sales" answer="purchases"/></li>
                        <li>If card is <DropDownMenu word="found" answer="lost"/> or <DropDownMenu word="borrowed" answer="stolen"/>, report import it immediately</li>
                        <li>Hard, <DropDownMenu word="metal" answer="plastic"/> card with information stored on a <DropDownMenu word="shiny" answer="magnetic"/> strip.</li>
                        <li>Owner's <DropDownMenu word="age" answer="name"/> and an <DropDownMenu word="birthday" answer="expiration"/> date on the card</li>
                    </ul>
                </div>
            </div>   
        </div>
    )
}

export default CreditDebitInfo
